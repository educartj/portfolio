import { Image } from "react-native"

export function Logo() {
  return (
    <Image
      source={require("@/assets/logo.png")}
      className="h-20"
      resizeMode="contain"
    />
  )
}