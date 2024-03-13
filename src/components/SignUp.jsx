import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom'; // For navigation after signup
// Ensure these imports match your project's structure
import { Text, Button, Input, Img } from "../components/ui"; 
import { auth } from "../firebaseConfig";

const SignupPage = () => {
  // State for form inputs
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const navigate = useNavigate();

const handleSignup = async (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const user = userCredential.user;
    console.log("User created:", user);
    // Add any additional logic here, such as setting the user's username or navigating to a different page
  } catch (error) {
    console.error("Error creating user:", error);
    alert(error.message);
  }
};

  return (
    <>
      <Helmet>
        <title>Signup - Scissor</title>
        <meta name="description" content="Sign up for Scissor" />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white-A700">
        <div className="w-full max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleSignup} className="space-y-4">

<div className="flex flex-col items-center justify-start w-full gap-[13px]">
  <Text size="s" as="p" className="!text-blue_gray-600 text-center">
    Sign up with:
  </Text>
  <div className="flex flex-row justify-start w-[53%] gap-6">
    {/* Facebook Button */}
    <Button
  size="xs"
  leftIcon={<Img src="/path/to/facebook_icon.svg" alt="Facebook" />}
  className="gap-[3px] min-w-[109px] rounded-[3px]"
>
  Facebook
</Button>
<Button
  size="xs"
  leftIcon={<Img src="/path/to/apple_icon.svg" alt="Apple" />}
  className="gap-[7px] min-w-[109px] rounded-[3px]"
>
  Apple
</Button>
  </div>
</div>
 {/* Username Input */}
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // Include necessary classes
            />
            {/* Email Input */}
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // Include necessary classes
            />
            {/* Password Input */}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // Include necessary classes
            />
            {/* Confirm Password Input */}
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Retype Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              // Include necessary classes
            />
            <Button type="submit" className="w-full">
              Sign up with Email
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Text>Already have an account? <a href="/login" className="text-blue-700">Log in</a></Text>
          </div>
<div className="text-center mt-6 text-sm text-gray-600">
  By signing up, you agree to our
  <a href="/terms-of-service" className="text-blue-700 hover:underline"> Terms of Service</a> and
  <a href="/privacy-policy" className="text-blue-700 hover:underline"> Privacy Policy</a>.
</div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
