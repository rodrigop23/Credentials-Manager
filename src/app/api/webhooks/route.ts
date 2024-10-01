import { dbConnect, Client } from "@/database/mongodb-connection";
import { UserModel } from "@/database/models/user.model";

import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

export const POST = async (req: Request) => {
  await dbConnect();

  const session = await Client.startSession();

  session.startTransaction();
  try {
    // Get the secret from the environment
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET_KEY;

    if (!WEBHOOK_SECRET) {
      throw new Error(
        "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
      );
    }

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response("Error occured -- no svix headers", {
        status: 400,
      });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent;

    // Verify the payload with the headers
    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Error occured", {
        status: 400,
      });
    }

    if (evt.type === "user.created") {
      const user = await UserModel.findOne({ id: evt.data.id });

      if (!user) {
        console.log("Creating user", evt.data);
        // await UserModel.create(
        //   {
        //     id: evt.data.id,
        //     name: evt.data.first_name,
        //     lastName: evt.data.last_name,
        //     email: evt.data.email_addresses[0].email_address,
        //     password: "",
        //     avatar_url: evt.data.image_url,
        //     password_enabled: evt.data.password_enabled,
        //     external_account: evt.data.external_accounts.length > 0,
        //   },
        //   { session }
        // );
      }
    }

    await session.commitTransaction();

    return Response.json(
      {
        message: "Usuario creado con éxito",
      },
      { status: 201 }
    );
  } catch (error) {
    await session.abortTransaction();

    return Response.json(
      {
        message: "Error en el servidor",
        ok: false,
      },
      { status: 500 }
    );
  } finally {
    session.endSession();
  }
};
