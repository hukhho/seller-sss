import { useAdminLogin } from "medusa-react"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../fundamentals/button"
import SigninInput from "../../molecules/input-signin"
import api from "../../../services/api"

type FormValues = {
  email: string
  password: string
}

type LoginCardProps = {
  toResetPassword: () => void
}

const LoginCard: React.FC<LoginCardProps> = ({ toResetPassword }) => {
  const [isInvalidLogin, setIsInvalidLogin] = useState(false)
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const navigate = useNavigate()
  const login = useAdminLogin()

  useEffect(() => {
    const check = async () => {
      try {
        const check = await api.auth.batch()
        console.log("check in useEffect", check)
      } catch (err) {
        console.log("error")
      }
    }
    check()
  }, [])

  const onSubmit = (values: FormValues) => {
    try {
      const check = api.auth.batch()
      console.log("check", check)
    } catch (err) {
      console.log("error")
    }

    login.mutate(values, {
      onSuccess: () => {
        navigate("/a/orders")
      },
      onError: () => {
        setIsInvalidLogin(true)
        reset()
      },
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center">
        <span className="inter-2xlarge-semibold mt-4 text-grey-90">
          Trang bán giày 123
        </span>
        <span className="inter-base-regular mt-2 text-grey-50">👋🏼</span>
        <span className="inter-base-regular mb-xlarge text-grey-50">
          Đăng nhập vào tài khoản
        </span>
        <SigninInput
          placeholder="Email..."
          {...register("email", { required: true })}
          autoComplete="email"
        />
        <SigninInput
          placeholder="Password..."
          type={"password"}
          {...register("password", { required: true })}
          autoComplete="current-password"
        />
        {isInvalidLogin && (
          <span className="inter-small-regular mt-2 w-full text-rose-50">
            These credentials do not match our records
          </span>
        )}
        <Button
          className="inter-base-regular mt-4 w-[320px] rounded-rounded"
          variant="primary"
          size="large"
          type="submit"
          loading={login.isLoading}
        >
          Đăng nhập
        </Button>
        <span
          className="inter-small-regular mt-8 cursor-pointer text-grey-50"
          onClick={toResetPassword}
        >
          Quên mật khẩu?
        </span>
        <Link to="/login" className="inter-small-regular mt-large text-grey-50">
          Đăng ký tài khoản
        </Link>
      </div>
    </form>
  )
}

export default LoginCard
