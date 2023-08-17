import { Resend } from "resend";
import Email from "../../../email/Email";
import { NextResponse } from "next/server";

const resend = new Resend("re_Do3NVvRz_3zg85xsuVrZvu2vLXcaJtcrM");
export async function GET() {
  // try {
    
    await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: "rasolon.michael@gmail.com",
      subject: "Merci pour votre participation à la liste de naissance",
      react: Email(),
    });

    return NextResponse.json({
      status: "OK",
    });
  // } catch (error) {
  //   console.error("Email sending error:", error);
  //   return NextResponse.error("Email sending failed");
  // }
}