import { Table } from "@medusajs/ui"
import { useProducts } from "medusa-react"
import { useParams } from "react-router-dom"
import { Product } from "@medusajs/medusa"
import Button from "../../../../components/fundamentals/button"
import { useEffect, useState } from "react"
import api from "../../../../services/api"
import { s } from "vitest/dist/env-afee91f0"
import useNotification from "../../../../hooks/use-notification"
import { consolidateImages } from "../../../../utils/consolidate-images"

type AdminDeposit = {
  id: string
  user_id: string
}
type AdminDepositQuery = {
  expand?: string
  fields?: string
}
type AdminDepositRes = {
  deposits: AdminDeposit[]
}

const depositsData = {
  deposits: [
    {
      id: "des_ccwcw",
      created_at: "2023-10-17T13:06:30.441Z",
      updated_at: "2023-10-17T13:06:30.441Z",
      user_id: "usr_01HBHY5BR4DWZVC4W180YQ753N",
      customer_id: null,
      coin_amount: "200000.00",
      fiat_type: "vnd",
      fiat_amount: "200000.00",
      method: "BANK",
      status: "PENDING",
      note: "3889999999996",
      txn: "33131",
      typeTrans: "DEPOSIT",
      revicedName: "BUI XUAN HUNG",
      revicedBankName: "MB BANK",
      revicedBankNumber: "3889999999996",
    },
    // Add more deposit objects here if needed
  ],
}
const DepositTable = () => {
  const [data, setData] = useState([])
  const getListDeposit = () => {
    console.log("getListDeposit called")
    api.deposits.list()
    .then((res) => {
      console.log("res.data", res.data)
      if (res.status === 200 && !res.data?.error) {
        setData(res.data.deposits)
      } else {
        console.log("error", res.data.error.message)
      }
    })
  }
  useEffect(() => {
    getListDeposit()
  }, [])


  const deposits = depositsData.deposits
  const notification = useNotification()

  function createQrCode(deposit) {
    console.log("createQrCode", "createQrCode")
    const amount = deposit.fiat_amount
    const txn = deposit.txn
    var link = `https://img.vietqr.io/image/MB-3889999999996-compact2.jpg?amount=${amount}&addInfo=${txn}&accountName=Bui%20Xuan%20Hung`
    window.open(link, "_blank")
  }

  const handleApproveClick = (deposit) => {
    createQrCode(deposit)
    console.log(`Create QR CODE with ID: ${deposit.id}`)
  }
  const handleSentMoney = (deposit) => {
    console.log("deposit", deposit)
    console.log(`Sent Money: ${deposit.id}`)

    api.deposits.update(deposit.id)
    .then((res) => {
      console.log("res.data", res.data)
      if (res.status === 200 && !res.data?.error) {
        notification("Success", "Successfully banked", "success")
      } else {
        console.log("error", res.data.error.message)
        notification("Error", "Failed banked", "error")
      }
    })
    getListDeposit()

  }
  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Mã giao dịch</Table.HeaderCell>
            <Table.HeaderCell>Số tiền</Table.HeaderCell>
            <Table.HeaderCell>Hình thức</Table.HeaderCell>
            <Table.HeaderCell>Trạng thái</Table.HeaderCell>
            <Table.HeaderCell>Ghi chú</Table.HeaderCell>
            <Table.HeaderCell>Hành động</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data && data.map((deposit) => (
            <Table.Row key={deposit.id}>
              <Table.Cell>{deposit.txn}</Table.Cell>
              <Table.Cell>{deposit.fiat_amount}</Table.Cell>
              <Table.Cell>{deposit.typeTrans}</Table.Cell>
              <Table.Cell>{deposit.status}</Table.Cell>
              <Table.Cell>{deposit.note}</Table.Cell>
              <Table.Cell>
                {deposit.typeTrans === "DEPOSIT" && (
                  <div className="flex space-x-4">
                    <Button
                      variant="secondary"
                      size="small"
                      disabled={false}
                      onClick={() => handleApproveClick(deposit)} // Pass the deposit object to the function
                      >
                      Tạo mã QR
                    </Button>
                    <Button
                      variant="secondary"
                      size="small"
                      disabled={false}
                      onClick={() => handleSentMoney(deposit)} // Pass the deposit object to the function
                      >
                      Đã chuyển khoản
                    </Button>
                  </div>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default DepositTable
