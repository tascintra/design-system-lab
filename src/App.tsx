import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { SignIn } from "./components/pages/SignIn";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";
import { Logo } from "./styles/Logo";

export function App() {
  return (
    <SignIn />
  )
}
