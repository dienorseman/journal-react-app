
import { AuthLayout } from "../layout/AuthLayout"
import { RegisterForm } from "../organisms"


export const RegisterPage = () => {
  return (
    <AuthLayout title={"Register"}>
      <RegisterForm />
    </AuthLayout>
  )
}
