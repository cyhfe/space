import { useMediaQuery } from "react-responsive"

export default function useMedia() {
  const isMobile = useMediaQuery({
    query: "(max-width: 576px)",
  })
  return {
    isMobile,
  }
}
