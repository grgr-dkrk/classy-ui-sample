import { compose, tokens, mobile } from 'classy-ui'

export const styleButton = (props: { isActive: boolean }) =>
  compose(
    tokens.borderColor.RED_400,
    tokens.borderWidth.WIDTH_1,
    tokens.borderRadius.MEDIUM,
    tokens.fontSize.EXTRA_LARGE_2,
    tokens.outline.NONE.focus,
    tokens.boxShadow.OUTLINE.focus, // 値の後に擬似クラスを指定できる
    props.isActive ? tokens.color.WHITE : tokens.color.RED_400,
    props.isActive
      ? tokens.backgroundColor.RED_400
      : tokens.backgroundColor.WHITE,
    mobile(tokens.fontSize.EXTRA_LARGE_4), // mediaquery
  )
