import clsx from "clsx"
import React from "react"
import { useForm, useWatch } from "react-hook-form"
import { useAnalytics } from "../../../context/analytics"
import useNotification from "../../../hooks/use-notification"
import {
  analytics,
  useAdminCreateAnalyticsConfig,
} from "../../../services/analytics"
import { getErrorMessage } from "../../../utils/error-messages"
import { nestedForm } from "../../../utils/nested-form"
import Button from "../../fundamentals/button"
import InputField from "../../molecules/input"
import FocusModal from "../../molecules/modal/focus-modal"
import AnalyticsConfigForm, {
  AnalyticsConfigFormType,
} from "../analytics-config-form"

type AnalyticsPreferenceFormType = {
  email?: string
  config: AnalyticsConfigFormType
}

const AnalyticsPreferencesModal = () => {

  const form = useForm<AnalyticsPreferenceFormType>({
    defaultValues: {
      config: {
        anonymize: false,
        opt_out: false,
      },
    },
  })
  const {
    register,
    formState: { errors },
    control,
  } = form

  const { setSubmittingConfig } = useAnalytics()

  const onSubmit = form.handleSubmit((data) => {
    const config = data.config
    setSubmittingConfig(true)
    analytics.identify("hukhho@gmail.com", {
      anonymize: config.anonymize,
      opt_out: config.opt_out,
    })
    setSubmittingConfig(false)
    form.reset()
  })

  return (
    <></>
    // <FocusModal>
    //   <FocusModal.Main>
    //     <div className="flex flex-col items-center">
    //       <div className="mt-5xlarge flex flex-col max-w-[664px] w-full">
    //         <h1 className="inter-xlarge-semibold mb-large">
    //           Chào mừng bạn đến với trang người bán SSS
    //         </h1>
    //         <p className="text-grey-50">
    //           Bạn có thể đăng bán sản phẩm ngay{" "}
    //           .
    //         </p>
          
    //         <div className="flex items-center justify-end mt-5xlarge">
    //           <Button
    //             variant="primary"
    //             size="small"
    //             onClick={onSubmit}
    //           >
    //             Tiếp tục
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </FocusModal.Main>
    // </FocusModal>
  )
}

export default AnalyticsPreferencesModal
