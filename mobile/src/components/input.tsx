import { colors } from "@/styles/colors"
import clsx from "clsx"
import { ReactNode } from "react"
import { TextInput, TextInputProps, View, Platform } from "react-native"


type Variants = "primary" | "secondary" | "tertiary"

type InputProps = {
  children: ReactNode
  variant?: Variants
}

function Input({ children, variant = "primary" }: InputProps) {
  return (
    <View
      className={clsx(
        "w-full h-16 flex-row items-center gap-2",
        {
          "h-14 px-4 rounded-lg border border-zinc-800": variant !== "primary",
        },
        {
          "bg-zinc-950": variant === "secondary"
        },
        {
          "bg-zinc-900": variant === "tertiary"
        },

      )}
    >
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      multiline
      //value={content}
      //onChangeText={setContent}
      className="p-0 font-body text-lg text-gray-50"
      placeholderTextColor={colors.gray[400]}
      cursorColor={colors.green[400]}
      selectionColor={Platform.OS === "ios" ? colors.green[400] : undefined }
      textAlignVertical="top"
      placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }
