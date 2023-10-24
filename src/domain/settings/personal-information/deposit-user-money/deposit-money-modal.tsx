import { User } from "@medusajs/medusa"
import { useAdminGetSession, useAdminUpdateUser } from "medusa-react"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../../../../components/fundamentals/button"
import InputField from "../../../../components/molecules/input"
import Modal from "../../../../components/molecules/modal"
import useNotification from "../../../../hooks/use-notification"
import api from "../../../../services/api"
import { useNavigate } from "react-router-dom"

type Props = {
  user: Omit<User, "password_hash">
  open: boolean
  onClose: () => void
}

type DepositRequest = {
  method: string | null
  fiat_amount: string | null
  txn: string | null
  note: string | null
}

const DepositUserMoneyModal = ({ open, onClose }: Props) => {
  const { refetch } = useAdminGetSession()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DepositRequest>({
  })

  // useEffect(() => {
  //   // reset(getDefaultValues(user))
  // }, [open, user])

  const notification = useNotification()
  const [errorMessage, setErrorMessage] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  function createQrCode(deposit) {
    console.log("createQrCode", "createQrCode")
    const amount = deposit.fiat_amount
    const txn = deposit.txn
    var link = `https://img.vietqr.io/image/MB-3889999999996-compact2.jpg?amount=${amount}&addInfo=${txn}&accountName=Bui%20Xuan%20Hung`
    window.open(link, "_blank")
  }
  const onSubmit = handleSubmit((data) => {
    setIsSubmitting(true)
    api.deposits
    .deposit(data)
    .then((res) => {
      console.log("res.data", res.data)
      if (res.status === 200 && !res.data?.error) {
        notification("Success", "Successfully deposit", "success")
        
        createQrCode(res.data.result)
        
      } else {
        console.log("error", res.data.error.message)

        setErrorMessage(res.data?.error?.message)

        notification("Error", res.data?.error?.message, "error")
      }
    })
    .catch((error) => {
      setErrorMessage(error.message)
      notification(
        "Error",
        "An error occurred while making the request",
        "error"
      )
      console.error("Axios Error:", error)
    }).finally(() => {
      setIsSubmitting(false)
      onClose()
      refetch()
    })
  })
  return (
    <Modal handleClose={onClose} open={open} isLargeModal={false}>
      <Modal.Header handleClose={onClose}>
        <h1 className="inter-xlarge-semibold">Yêu cầu nạp tiền</h1>
      </Modal.Header>
      <Modal.Body>
        <Modal.Content>
          <div className="flex flex-col gap-y-base">
            <div className="grid grid-cols-2 gap-x-base">
              
              <InputField
                {...register("fiat_amount")}
                errors={errors}
                label="Số tiền (vnđ)"
              />
          
              <InputField
                {...register("note")}
                errors={errors}
                label="Ghi chú"
              />
             
            </div>
          </div>
        </Modal.Content>
        <Modal.Footer className="border-t border-grey-20 pt-base">
          <div className="flex w-full items-center justify-end gap-x-xsmall">
            <Button variant="secondary" size="small" onClick={onClose}>
              Huỷ
            </Button>
            <Button
              variant="primary"
              size="small"
              loading={isSubmitting}
              disabled={isSubmitting}
              onClick={onSubmit}
            >
              Nạp
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}


export default DepositUserMoneyModal
