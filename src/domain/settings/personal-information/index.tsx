import { useAdminGetSession } from "medusa-react"
import React from "react"
import BackButton from "../../../components/atoms/back-button"
import { useFeatureFlag } from "../../../context/feature-flag"
import EditUserInformation from "./edit-user-information"
import UsageInsights from "./usage-insights"
import DepositUserMoney from "./deposit-user-money"
import BodyCard from "../../../components/organisms/body-card"
import TableViewHeader from "../../../components/organisms/custom-table-header"
import DepositTable from "./deposit-user-money/deposit-table"
import WithdrawUserMoney from "./withdraw-user-money"

const PersonalInformation = () => {
  const { isFeatureEnabled } = useFeatureFlag()
  const { user } = useAdminGetSession()

  console.log("user", user)
  const actionables = [
  ]
  return (
    <div>
      <BackButton
        label="Back to Settings"
        path="/a/settings"
        className="mb-xsmall"
      />
      <div className="flex flex-col gap-y-xlarge rounded-rounded border border-grey-20 bg-white px-xlarge pt-large pb-xlarge large:max-w-[50%]">
        <div className="flex flex-col gap-y-2xsmall">
          <h1 className="inter-xlarge-semibold">Personal information</h1>
          <p className="inter-base-regular text-grey-50">Chỉnh sửa thông tin</p>
        </div>
        <div className="flex flex-col">
          <div className="border-t border-grey-20 py-xlarge">
            <div className="mt-5 mb-10 flex">
              <div className="mr-10"> Số dư: {user?.coin}</div>
              <div>
                {" "}
                <DepositUserMoney user={user} />
                <WithdrawUserMoney user={user} />
              </div>
            </div>
            <EditUserInformation user={user} />
            
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col">
      <div className="w-full flex flex-col mt-10 grow">

        <BodyCard
          actionables={actionables}
          customHeader={<TableViewHeader views={["Lịch sử giao dịch"]} />}
          className="h-fit"
        >
          <DepositTable />
        </BodyCard>
      </div>
   
    </div>
    </div>
  )
}

export default PersonalInformation
