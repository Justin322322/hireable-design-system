import { Talent, dbConnect } from "@hireable/database";
import { SecurityValidator } from "@hireable/shared";
import { NextRequest, NextResponse } from "next/server";

interface TalentWaitlistRequest {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  agree: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: TalentWaitlistRequest = await request.json();
    const { firstName, lastName, email, role, agree } = body;

    // Validate agree
    const agreeValidation = SecurityValidator.validateAgree(agree);
    if (!agreeValidation.isValid) {
      return NextResponse.json(
        { message: agreeValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate firstName
    const firstNameValidation = SecurityValidator.validateFirstName(firstName);
    if (!firstNameValidation.isValid) {
      return NextResponse.json(
        { message: firstNameValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate lastName
    const lastNameValidation = SecurityValidator.validateLastName(lastName);
    if (!lastNameValidation.isValid) {
      return NextResponse.json(
        { message: lastNameValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate email
    const emailValidation = SecurityValidator.validateEmail(email);
    if (!emailValidation.isValid) {
      return NextResponse.json(
        { message: emailValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate role
    const roleValidation = SecurityValidator.validateRole(role);
    if (!roleValidation.isValid) {
      return NextResponse.json(
        { message: roleValidation.errors[0] },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Check for duplicate email
    const existing = await Talent.findOne({
      email: emailValidation.sanitizedData,
    });
    if (existing) {
      return NextResponse.json(
        { message: "This email is already on the waitlist." },
        { status: 409 }
      );
    }

    // Create new talent entry
    const newTalent = new Talent({
      firstName: firstNameValidation.sanitizedData,
      lastName: lastNameValidation.sanitizedData,
      email: emailValidation.sanitizedData,
      role: roleValidation.sanitizedData,
      agree,
    });
    await newTalent.save();

    return NextResponse.json(
      {
        message: "Successfully added to waitlist",
        success: true,
        data: {
          id: newTalent._id,
          timestamp: newTalent.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error joining talent waitlist:", error);
    return NextResponse.json({ message: "Error saving data" }, { status: 500 });
  }
}
