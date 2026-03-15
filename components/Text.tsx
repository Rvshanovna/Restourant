type TextProps = {
  title: string
  extraClass?: string
}

const Text = ({ title, extraClass }: TextProps) => {
  return (
    <h1 className={`${extraClass} text-[48px] text-black font-black text-center mb-20`}>
      {title}
    </h1>
  )
}

export default Text
