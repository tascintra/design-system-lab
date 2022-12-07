import { SVGAttributes } from "react"

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={107}
      height={122}
      viewBox="0 0 107 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M107 61.01c0-7.092-8.877-13.813-22.486-17.982 3.14-13.88 1.745-24.922-4.406-28.458-1.417-.83-3.075-1.222-4.885-1.222v4.867c1.003 0 1.81.196 2.486.567 2.966 1.702 4.253 8.184 3.25 16.52-.24 2.052-.633 4.213-1.112 6.417-4.275-1.048-8.943-1.855-13.85-2.379-2.944-4.037-5.998-7.704-9.073-10.912 7.11-6.613 13.784-10.235 18.32-10.235v-4.867c-5.997 0-13.849 4.277-21.788 11.698-7.939-7.377-15.79-11.61-21.788-11.61v4.866c4.515 0 11.21 3.601 18.32 10.17a103.072 103.072 0 00-9.007 10.89c-4.929.524-9.596 1.331-13.871 2.4a65.883 65.883 0 01-1.134-6.328c-1.025-8.337.24-14.819 3.184-16.543.654-.392 1.505-.567 2.508-.567v-4.867c-1.832 0-3.49.393-4.929 1.222-6.129 3.536-7.503 14.557-4.34 28.393C8.833 47.24 0 53.94 0 61.01c0 7.094 8.877 13.815 22.486 17.984-3.14 13.88-1.745 24.922 4.406 28.458 1.417.829 3.075 1.222 4.907 1.222 5.998 0 13.85-4.278 21.788-11.698 7.94 7.377 15.79 11.611 21.788 11.611 1.832 0 3.49-.393 4.93-1.222 6.128-3.536 7.502-14.557 4.34-28.393C98.167 74.804 107 68.082 107 61.01zM78.603 46.456c-.807 2.815-1.81 5.717-2.944 8.62a103.27 103.27 0 00-2.857-5.238 118.125 118.125 0 00-3.14-5.107 98.34 98.34 0 018.941 1.725zm-9.989 23.242c-1.7 2.946-3.446 5.74-5.256 8.336-3.25.284-6.543.437-9.858.437-3.293 0-6.587-.153-9.815-.415a120.309 120.309 0 01-5.278-8.293 113.672 113.672 0 01-4.536-8.686 113.8 113.8 0 014.515-8.707c1.7-2.947 3.446-5.74 5.256-8.337 3.25-.284 6.543-.436 9.858-.436 3.293 0 6.587.152 9.815.414a120.309 120.309 0 015.278 8.293 113.672 113.672 0 014.536 8.686 122.182 122.182 0 01-4.515 8.708zm7.045-2.837a93.585 93.585 0 013.01 8.686 97.813 97.813 0 01-8.986 1.745 120.606 120.606 0 003.14-5.172 123.93 123.93 0 002.836-5.26zM53.544 90.146a89.979 89.979 0 01-6.064-6.984c1.963.087 3.97.153 5.998.153 2.05 0 4.079-.044 6.063-.153a85.173 85.173 0 01-5.997 6.984zM37.317 77.29a98.349 98.349 0 01-8.942-1.724c.807-2.815 1.81-5.717 2.944-8.62a103.27 103.27 0 002.857 5.238 144.579 144.579 0 003.141 5.106zm16.118-45.415a89.997 89.997 0 016.063 6.984c-1.963-.087-3.97-.153-5.998-.153-2.05 0-4.078.044-6.063.153a85.19 85.19 0 015.998-6.984zM37.295 44.73a120.606 120.606 0 00-5.976 10.41 93.575 93.575 0 01-3.01-8.685 105.871 105.871 0 018.986-1.725zM17.557 72.054C9.837 68.758 4.842 64.437 4.842 61.01c0-3.426 4.994-7.77 12.715-11.043 1.876-.807 3.926-1.528 6.042-2.204 1.243 4.277 2.878 8.73 4.907 13.29-2.007 4.54-3.62 8.97-4.842 13.226a66.202 66.202 0 01-6.107-2.226zm11.734 31.186c-2.966-1.702-4.253-8.184-3.25-16.52.24-2.052.633-4.213 1.113-6.417 4.274 1.048 8.942 1.855 13.849 2.379 2.944 4.037 5.998 7.704 9.073 10.912-7.11 6.612-13.784 10.235-18.32 10.235-.982-.022-1.81-.218-2.465-.589zm51.733-16.63c1.025 8.337-.24 14.818-3.184 16.543-.654.392-1.505.567-2.508.567-4.515 0-11.21-3.601-18.32-10.17a103.081 103.081 0 009.007-10.89c4.929-.524 9.596-1.331 13.871-2.4.502 2.204.894 4.32 1.134 6.35zm8.397-14.556c-1.876.807-3.926 1.527-6.041 2.204-1.243-4.277-2.88-8.73-4.907-13.29 2.006-4.54 3.62-8.97 4.841-13.226 2.16.677 4.21 1.419 6.129 2.226 7.72 3.295 12.715 7.617 12.715 11.043-.022 3.426-5.016 7.77-12.737 11.043z"
        fill="#81D8F7"
      />
      <path
        d="M53.478 70.984c5.505 0 9.967-4.465 9.967-9.973 0-5.508-4.462-9.974-9.967-9.974-5.505 0-9.967 4.466-9.967 9.974s4.462 9.973 9.967 9.973z"
        fill="#81D8F7"
      />
    </svg>
  )
}
