import React from "react"
import InputField from "../../../../components/molecules/input"
import TextArea from "../../../../components/molecules/textarea"
import FormValidator from "../../../../utils/form-validator"
import { NestedForm } from "../../../../utils/nested-form"

export type GeneralFormType = {
  title: string
  subtitle: string | null
  handle: string
  material: string | null
  description: string | null
}

type Props = {
  form: NestedForm<GeneralFormType>
  requireHandle?: boolean
}

const GeneralForm = ({ form, requireHandle = true }: Props) => {
  const {
    register,
    path,
    formState: { errors },
  } = form

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-large mb-small">
        <InputField
          label="Tên sản phẩm"
          placeholder="Nike Air Max Excee"
          required
          {...register(path("title"), {
            required: "Tên sản phẩm bắt buộc",
            minLength: {
              value: 1,
              message: "Tên sản phẩm tối thiểu 1 kí tự",
            },
            pattern: FormValidator.whiteSpaceRule("Title"),
          })}
          errors={errors}
        />
        {/* <InputField
          label="Subtitle"
          placeholder="Warm and cozy..."
          {...register(path("subtitle"), {
            pattern: FormValidator.whiteSpaceRule("Subtitle"),
          })}
          errors={errors}
        /> */}
      </div>
      <p className="inter-base-regular text-grey-50 mb-large">
        Tên sản phẩm nên chính xác và rõ ràng
        <br />
      </p>
        {/* <div className="grid grid-cols-2 gap-x-large mb-large">
          <InputField
            label="Handle"
            tooltipContent={
              !requireHandle
                ? "The handle is the part of the URL that identifies the product. If not specified, it will be generated from the title."
                : undefined
            }
            placeholder="winter-jacket"
            required={requireHandle}
            {...register(path("handle"), {
              required: requireHandle ? "Handle is required" : undefined,
              minLength: FormValidator.minOneCharRule("Handle"),
              pattern: FormValidator.whiteSpaceRule("Handle"),
            })}
            prefix="/"
            errors={errors}
          />
          <InputField
            label="Material"
            placeholder="100% cotton"
            {...register(path("material"), {
              minLength: FormValidator.minOneCharRule("Material"),
              pattern: FormValidator.whiteSpaceRule("Material"),
            })}
            errors={errors}
          />
        </div> */}
      <TextArea
        label="Mô tả tình trạng"
        placeholder="Giày mới mua 1 tháng, còn mới ..."
        rows={3}
        className="mb-small"
        {...register(path("description"))}
        errors={errors}
      />
      <p className="inter-base-regular text-grey-50">
        Đảm bảo mô tả trung thực tình trạng giày.
        <br />
      </p>
    </div>
  )
}

export default GeneralForm
