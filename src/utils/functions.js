export const validateImage = (value) => {
    console.log(value)
  return value && value[0].size < 4_500_000
}
