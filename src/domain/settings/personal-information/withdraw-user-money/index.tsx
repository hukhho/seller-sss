import { User } from "@medusajs/medusa"
import React, { useMemo } from "react"
import Avatar from "../../../../components/atoms/avatar"
import Button from "../../../../components/fundamentals/button"
import useToggleState from "../../../../hooks/use-toggle-state"
import EditUserInformationModal from "./withdraw-money-modal"

type Props = {
  user?: Omit<User, "password_hash">
}

const WithdrawUserMoney = ({ user }: Props) => {
  const { state, toggle, close } = useToggleState()

  const name = useMemo(() => {
    const names = [user?.first_name, user?.last_name]

    return names.filter((n) => n).join(" ")
  }, [user])

  return (
    <>
      <Button
        variant="secondary"
        size="small"
        disabled={!user}
        onClick={toggle}
      >
        Rút tiền
      </Button>
      {user && (
        <EditUserInformationModal open={state} onClose={close} user={user} />
      )}
      {/* <DepositTable /> */}
    </>
  )
}

export default WithdrawUserMoney
