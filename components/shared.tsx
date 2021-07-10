import * as ContextMenu from '@radix-ui/react-context-menu'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Panel from './panel'
import styled from 'styles'
import { forwardRef } from 'react'
import { CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { isMobile } from 'utils'

export const breakpoints: any = { '@initial': 'mobile', '@sm': 'small' }

export const IconButton = styled('button', {
  position: 'relative',
  height: '32px',
  width: '32px',
  backgroundColor: '$panel',
  borderRadius: '4px',
  padding: '0',
  margin: '0',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  border: 'none',
  pointerEvents: 'all',
  fontSize: '$0',
  color: '$text',
  cursor: 'pointer',

  '& > *': {
    gridRow: 1,
    gridColumn: 1,
  },

  '&:disabled': {
    opacity: '0.5',
  },

  '& > span': {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  variants: {
    bp: {
      mobile: {
        backgroundColor: 'transparent',
      },
      small: {
        '&:hover:not(:disabled)': {
          backgroundColor: '$hover',
        },
      },
    },
    size: {
      small: {
        height: 32,
        width: 32,
        '& svg:nth-of-type(1)': {
          height: '16px',
          width: '16px',
        },
      },
      medium: {
        height: 44,
        width: 44,
        '& svg:nth-of-type(1)': {
          height: '18px',
          width: '18px',
        },
      },
      large: {
        height: 44,
        width: 44,
        '& svg:nth-of-type(1)': {
          height: '20px',
          width: '20px',
        },
      },
    },
    isActive: {
      true: {
        color: '$selected',
      },
    },
  },
})

export const RowButton = styled('button', {
  position: 'relative',
  display: 'flex',
  width: '100%',
  background: 'none',
  height: '32px',
  border: 'none',
  cursor: 'pointer',
  color: '$text',
  outline: 'none',
  alignItems: 'center',
  fontFamily: '$ui',
  fontWeight: 400,
  fontSize: '$1',
  justifyContent: 'space-between',
  padding: '4px 8px 4px 12px',
  borderRadius: 4,

  '& label': {
    fontWeight: '$1',
    margin: 0,
    padding: 0,
  },

  '& svg': {
    position: 'relative',
    stroke: 'rgba(0,0,0,.2)',
    strokeWidth: 1,
    zIndex: 1,
  },

  '&:disabled': {
    opacity: 0.1,
  },

  variants: {
    bp: {
      mobile: {},
      small: {
        '& *[data-shy="true"]': {
          opacity: 0,
        },
        '&:hover:not(:disabled)': {
          backgroundColor: '$hover',
          '& *[data-shy="true"]': {
            opacity: 1,
          },
        },
      },
    },
    size: {
      icon: {
        padding: '4px ',
        width: 'auto',
      },
    },
    variant: {
      pageButton: {
        display: 'grid',
        gridTemplateColumns: '24px auto',
        width: '100%',
        paddingLeft: '$1',
        gap: '$3',
        justifyContent: 'flex-start',
        [`& > *[data-state="checked"]`]: {
          gridRow: 1,
          gridColumn: 1,
        },
        '& > span': {
          gridRow: 1,
          gridColumn: 2,
          width: '100%',
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.3,
      },
    },
    isActive: {
      true: {
        backgroundColor: '$hover',
      },
    },
  },
})

export const StylePanelRoot = styled(Panel.Root, {
  minWidth: 1,
  width: 184,
  maxWidth: 184,
  overflow: 'hidden',
  position: 'relative',
  border: '1px solid $panel',
  boxShadow: '$4',

  variants: {
    isOpen: {
      true: {},
      false: {
        padding: '$0',
        height: 38,
        width: 38,
      },
    },
  },
})

export const Group = styled(RadioGroup.Root, {
  display: 'flex',
})

export const Item = styled('button', {
  height: '32px',
  width: '32px',
  backgroundColor: '$panel',
  borderRadius: '4px',
  padding: '0',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  border: 'none',
  pointerEvents: 'all',
  cursor: 'pointer',

  '&:hover:not(:disabled)': {
    backgroundColor: '$hover',
    '& svg': {
      stroke: '$text',
      fill: '$text',
      strokeWidth: '0',
    },
  },

  '&:disabled': {
    opacity: '0.5',
  },

  variants: {
    isActive: {
      true: {
        '& svg': {
          fill: '$text',
          stroke: '$text',
        },
      },
      false: {
        '& svg': {
          fill: '$inactive',
          stroke: '$inactive',
        },
      },
    },
  },
})

export const IconWrapper = styled('div', {
  height: '100%',
  borderRadius: '4px',
  marginRight: '1px',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  border: 'none',
  pointerEvents: 'all',
  cursor: 'pointer',
  color: '$text',

  '& svg': {
    height: 22,
    width: 22,
    strokeWidth: 1,
  },

  '& > *': {
    gridRow: 1,
    gridColumn: 1,
  },

  variants: {
    size: {
      small: {
        '& svg': {
          height: '16px',
          width: '16px',
        },
      },
      medium: {
        '& svg': {
          height: '22px',
          width: '22px',
        },
      },
    },
  },
})

export const DropdownContent = styled(DropdownMenu.Content, {
  display: 'grid',
  padding: 4,
  gridTemplateColumns: 'repeat(4, 1fr)',
  backgroundColor: '$panel',
  borderRadius: 4,
  border: '1px solid $panel',
  boxShadow: '$4',

  variants: {
    direction: {
      vertical: {
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export function DashSolidIcon(): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={12}
        cy={12}
        r={8}
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

export function DashDashedIcon(): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={12}
        cy={12}
        r={8}
        fill="none"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeDasharray={50.26548 * 0.1}
      />
    </svg>
  )
}

const dottedDasharray = `${50.26548 * 0.025} ${50.26548 * 0.1}`

export function DashDottedIcon(): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={12}
        cy={12}
        r={8}
        fill="none"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeDasharray={dottedDasharray}
      />
    </svg>
  )
}

export function DashDrawIcon(): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="1 1.5 21 22"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0162 19.2768C10.0162 19.2768 9.90679 19.2517 9.6879 19.2017C9.46275 19.1454 9.12816 19.0422 8.68413 18.8921C8.23384 18.7358 7.81482 18.545 7.42707 18.3199C7.03307 18.101 6.62343 17.7883 6.19816 17.3818C5.77289 16.9753 5.33511 16.3718 4.88482 15.5713C4.43453 14.7645 4.1531 13.8545 4.04053 12.8414C3.92795 11.822 4.04991 10.8464 4.40639 9.91451C4.76286 8.98266 5.39452 8.10084 6.30135 7.26906C7.21444 6.44353 8.29325 5.83377 9.5378 5.43976C10.7823 5.05202 11.833 4.92068 12.6898 5.04576C13.5466 5.16459 14.3878 5.43664 15.2133 5.86191C16.0388 6.28718 16.7768 6.8688 17.4272 7.60678C18.0714 8.34475 18.5404 9.21406 18.8344 10.2147C19.1283 11.2153 19.1721 12.2598 18.9657 13.348C18.7593 14.4299 18.2872 15.4337 17.5492 16.3593C16.8112 17.2849 15.9263 18.0072 14.8944 18.5263C13.8624 19.0391 12.9056 19.3174 12.0238 19.3612C11.142 19.405 10.2101 19.2705 9.22823 18.9578C8.24635 18.6451 7.35828 18.151 6.56402 17.4756C5.77601 16.8002 6.08871 16.8658 7.50212 17.6726C8.90927 18.4731 10.1444 18.8484 11.2076 18.7983C12.2645 18.7545 13.2965 18.4825 14.3034 17.9822C15.3102 17.4819 16.1264 16.8221 16.7518 16.0028C17.3772 15.1835 17.7681 14.3111 17.9244 13.3855C18.0808 12.4599 18.0401 11.5781 17.8025 10.74C17.5586 9.902 17.1739 9.15464 16.6486 8.49797C16.1233 7.8413 15.2289 7.27844 13.9656 6.80939C12.7086 6.34034 11.4203 6.20901 10.1007 6.41539C8.78732 6.61552 7.69599 7.06893 6.82669 7.77564C5.96363 8.48859 5.34761 9.26409 4.97863 10.1021C4.60964 10.9402 4.45329 11.8376 4.50958 12.7945C4.56586 13.7513 4.79101 14.6238 5.18501 15.4118C5.57276 16.1998 5.96363 16.8002 6.35764 17.2129C6.75164 17.6257 7.13313 17.9509 7.50212 18.1886C7.87736 18.4325 8.28074 18.642 8.71227 18.8171C9.15005 18.9922 9.47839 19.111 9.69728 19.1736C9.91617 19.2361 10.0256 19.2705 10.0256 19.2768H10.0162Z"
        strokeWidth="2"
      />
    </svg>
  )
}

export function BoxIcon({
  fill = 'none',
  stroke = 'currentColor',
}: {
  fill?: string
  stroke?: string
}): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke={stroke}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
    </svg>
  )
}

export const IsFilledFillIcon = forwardRef<SVGSVGElement, { color?: string }>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.6168 11.1303C2.6168 11.1303 2.7023 11.0131 2.8733 10.7788C3.0443 10.5444 3.1298 10.4272 3.1298 10.4272C3.1298 10.4272 3.23333 10.2823 3.4404 9.99236C3.64746 9.70246 3.85889 9.40341 4.0747 9.09521C4.2905 8.78701 4.50606 8.47574 4.72139 8.16141C4.93671 7.84708 5.14338 7.54139 5.3414 7.24432C5.53943 6.94726 5.72068 6.67162 5.88517 6.41742C6.04966 6.16321 6.2116 5.91477 6.37099 5.67211C6.53038 5.42944 6.69528 5.18806 6.86568 4.94796C7.03608 4.70786 7.21694 4.4699 7.40824 4.23409C7.59955 3.99828 7.81063 3.76287 8.0415 3.52787C8.27236 3.29286 8.71114 3.0267 9.35782 2.72937C10.0045 2.43203 10.4713 2.35281 10.7581 2.49169C11.045 2.63057 11.2637 2.84049 11.4141 3.12146C11.5645 3.40243 11.618 3.70079 11.5746 4.01653C11.5312 4.33227 11.4627 4.59891 11.3691 4.81646C11.2756 5.03401 11.0858 5.43918 10.7998 6.03199C10.5139 6.62479 10.2122 7.17617 9.89499 7.68612C9.57773 8.19607 9.25048 8.71529 8.91323 9.24379C8.57598 9.77229 8.24193 10.3038 7.91107 10.8382C7.58021 11.3726 7.2828 11.8729 7.01885 12.339C6.75489 12.8051 6.53711 13.2259 6.36552 13.6014C6.19393 13.977 6.0132 14.3951 5.82332 14.8557C5.63344 15.3163 5.43771 15.617 5.23612 15.7578C5.03453 15.8986 4.80537 15.7993 4.54865 15.4599C4.29193 15.1205 4.11244 14.8722 4.0102 14.7148C3.90796 14.5575 3.97008 14.3802 4.19657 14.183C4.42306 13.9858 4.69016 13.7584 4.99789 13.5009C5.30561 13.2434 5.64245 12.9617 6.00839 12.6559C6.37434 12.35 6.67617 12.0967 6.91389 11.8958C7.15161 11.695 7.39026 11.4926 7.62985 11.2885C7.86944 11.0844 8.15332 10.8467 8.48148 10.5754C8.80965 10.3042 9.23907 9.9577 9.76972 9.53604C10.3004 9.11439 10.867 8.66604 11.4695 8.19102C12.072 7.71599 12.6869 7.22975 13.3142 6.73229C13.9415 6.23483 14.5741 5.73378 15.2121 5.22914C15.85 4.7245 16.4168 4.26953 16.9125 3.86423C17.4081 3.45892 17.7739 3.14715 18.0099 2.92891C18.2459 2.71066 18.5969 2.50912 19.0631 2.32427C19.5292 2.13942 19.8754 2.10947 20.1017 2.23443C20.328 2.35939 20.4959 2.53892 20.6056 2.77302C20.7152 3.00712 20.7455 3.25108 20.6966 3.50489C20.6477 3.75871 20.6108 3.93537 20.5859 4.03487C20.561 4.13437 20.4998 4.32304 20.4023 4.60088C20.3047 4.87872 20.1621 5.17449 19.9745 5.4882C19.7869 5.80191 19.576 6.14669 19.3419 6.52256C19.1078 6.89842 18.9086 7.21331 18.7443 7.46722C18.58 7.72113 18.4142 7.9759 18.2469 8.23153C18.0796 8.48716 17.8836 8.77861 17.6588 9.10588C17.434 9.43316 17.1448 9.84205 16.7912 10.3326C16.4376 10.8231 16.0659 11.342 15.676 11.8893C15.2862 12.4365 14.9001 12.9968 14.5178 13.5701C14.1356 14.1435 13.7682 14.7264 13.4159 15.3191C13.0635 15.9118 12.7579 16.4671 12.4989 16.985C12.24 17.503 12.0533 17.9527 11.9389 18.3342C11.8244 18.7156 11.7224 19.1347 11.6326 19.5912C11.5429 20.0477 11.3788 20.6043 11.1402 21.2609C10.9016 21.9175 10.6425 22.299 10.3629 22.4054C10.0832 22.5118 9.79895 22.5258 9.51015 22.4475C9.22136 22.3692 8.98315 22.2135 8.79554 21.9804C8.60793 21.7473 8.53141 21.5443 8.56597 21.3714C8.60054 21.1985 8.6805 20.9055 8.80586 20.4924C8.93122 20.0794 9.10654 19.7322 9.33182 19.4511C9.55709 19.17 9.8396 18.8347 10.1793 18.4454C10.5191 18.056 10.8588 17.6756 11.1985 17.3041C11.5381 16.9326 11.8676 16.5798 12.1871 16.2457C12.5065 15.9117 12.8481 15.5592 13.2121 15.1882C13.576 14.8173 13.9567 14.4418 14.3542 14.0616C14.7517 13.6814 15.1666 13.3082 15.599 12.9418C16.0313 12.5755 16.437 12.2489 16.8159 11.962C17.1948 11.6752 17.5102 11.4423 17.762 11.2634C18.0138 11.0844 18.3084 10.8902 18.6457 10.6807C18.983 10.4711 19.3744 10.3243 19.82 10.2401C20.2656 10.1559 20.6534 10.2693 20.9834 10.5803C21.3134 10.8913 21.4496 11.2717 21.392 11.7215C21.3344 12.1713 21.1067 12.5051 20.7089 12.7229C20.3112 12.9406 19.9073 12.9526 19.4973 12.7588C19.0873 12.565 18.8402 12.2453 18.7561 11.7997C18.6719 11.3541 18.7853 10.9663 19.0963 10.6363C19.4073 10.3063 19.7877 10.1701 20.2375 10.2277C20.6873 10.2853 21.0211 10.513 21.2388 10.9108C21.4566 11.3086 21.4686 11.7124 21.2748 12.1224C21.081 12.5324 20.8095 12.8344 20.4603 13.0286C20.1111 13.2227 19.8038 13.4005 19.5384 13.5619C19.273 13.7233 18.9732 13.9304 18.6387 14.1834C18.3043 14.4364 17.9499 14.7309 17.5755 15.0671C17.201 15.4032 16.8338 15.7568 16.4739 16.1278C16.114 16.4987 15.762 16.8738 15.418 17.253C15.0741 17.6321 14.7467 17.9939 14.4358 18.3383C14.125 18.6826 13.8006 19.0346 13.4627 19.3941C13.1248 19.7537 12.7843 20.1151 12.4411 20.4784C12.0979 20.8417 11.7811 21.1784 11.4907 21.4885C11.2003 21.7987 11.0097 22.0025 10.9187 22.0998C10.8278 22.1971 10.6425 22.299 10.3629 22.4054C10.0832 22.5118 9.79895 22.5258 9.51015 22.4475C9.22136 22.3692 8.98315 22.2135 8.79554 21.9804C8.60793 21.7473 8.56361 21.2915 8.6626 20.6129C8.76158 19.9344 8.86025 19.4336 8.95861 19.1104C9.05697 18.7873 9.15977 18.4792 9.267 18.186C9.37423 17.8929 9.51059 17.5722 9.67609 17.2241C9.84159 16.8759 10.0617 16.4208 10.3365 15.8586C10.6113 15.2963 10.9173 14.6928 11.2544 14.0481C11.5915 13.4033 11.9371 12.7709 12.2911 12.1509C12.645 11.5309 12.9985 10.928 13.3515 10.3421C13.7045 9.75628 14.043 9.20593 14.3669 8.6911C14.6908 8.17628 14.9637 7.75371 15.1856 7.42339C15.4075 7.09308 15.6064 6.80362 15.7825 6.55501C15.9585 6.3064 16.1337 6.06006 16.3078 5.81598C16.482 5.5719 16.6533 5.33288 16.8217 5.09891C16.9901 4.86494 17.216 4.59736 17.4993 4.29615C17.7826 3.99495 18.1463 3.6271 18.5904 3.1926C19.0345 2.7581 19.3409 2.45855 19.5094 2.29392C19.678 2.1293 19.8754 2.10947 20.1017 2.23443C20.328 2.35939 20.4959 2.53892 20.6056 2.77302C20.7152 3.00712 20.7455 3.25108 20.6966 3.50489C20.6477 3.75871 20.3584 4.05693 19.8288 4.39957C19.2993 4.7422 18.7953 5.11711 18.3168 5.52431C17.8384 5.93151 17.3057 6.40907 16.7189 6.95701C16.1321 7.50495 15.554 8.0585 14.9846 8.61766C14.4151 9.17682 13.8571 9.72936 13.3104 10.2753C12.7637 10.8212 12.2439 11.3334 11.7509 11.8119C11.258 12.2905 10.8516 12.6747 10.5319 12.9645C10.2122 13.2543 9.93102 13.503 9.68844 13.7105C9.44586 13.918 9.20376 14.1242 8.96214 14.329C8.72051 14.5339 8.41222 14.7917 8.03728 15.1027C7.66233 15.4136 7.3052 15.7042 6.96587 15.9744C6.62655 16.2447 6.30615 16.4867 6.00468 16.7005C5.70321 16.9143 5.4028 17.1012 5.10345 17.2611C4.8041 17.421 4.46527 17.4827 4.08697 17.4462C3.70867 17.4098 3.36157 17.209 3.04566 16.8439C2.72975 16.4788 2.5775 16.0785 2.58891 15.6432C2.60033 15.2079 2.70674 14.7684 2.90815 14.3248C3.10956 13.8811 3.29546 13.4939 3.46586 13.163C3.63625 12.832 3.80799 12.5116 3.98107 12.2016C4.15415 11.8916 4.37223 11.4904 4.6353 10.9979C4.89838 10.5055 5.18148 9.97864 5.48461 9.41727C5.78773 8.8559 6.08723 8.30477 6.3831 7.7639C6.67898 7.22302 6.96213 6.69976 7.23257 6.19412C7.50301 5.68847 7.75585 5.24404 7.99109 4.86081C8.22633 4.47759 8.57505 4.04675 9.03725 3.56831C9.49946 3.08987 9.8301 2.7561 10.0292 2.56701C10.2283 2.37791 10.4713 2.35281 10.7581 2.49169C11.045 2.63057 11.2637 2.84049 11.4141 3.12146C11.5645 3.40243 11.618 3.70079 11.5746 4.01653C11.5312 4.33227 11.1439 4.77278 10.4128 5.33807C9.68173 5.90336 9.17886 6.30718 8.90421 6.54953C8.62955 6.79188 8.38273 7.01366 8.16374 7.21485C7.94475 7.41605 7.71551 7.6216 7.47603 7.83151C7.23655 8.04141 6.97229 8.26391 6.68326 8.49901C6.39423 8.7341 6.09233 8.96876 5.77756 9.20297C5.46279 9.43719 5.1469 9.6616 4.8299 9.87622C4.5129 10.0908 4.20211 10.2932 3.89753 10.4834L2.6168 11.1303Z"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }
)

export const ButtonsRow = styled('div', {
  position: 'relative',
  display: 'flex',
  width: '100%',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: 0,
})

export const VerticalDivider = styled('hr', {
  width: '1px',
  margin: '-2px 3px',
  border: 'none',
  backgroundColor: '$brushFill',
})

export const FloatingContainer = styled('div', {
  backgroundColor: '$panel',
  border: '1px solid $panel',
  borderRadius: '4px',
  boxShadow: '$4',
  display: 'flex',
  height: 'fit-content',
  padding: '$0',
  pointerEvents: 'all',
  position: 'relative',
  userSelect: 'none',
  zIndex: 200,
})

/* -------------------------------------------------- */
/*                        Menus                       */
/* -------------------------------------------------- */

export const MenuContent = styled('div', {
  position: 'relative',
  backgroundColor: '$panel',
  borderRadius: '4px',
  overflow: 'hidden',
  pointerEvents: 'all',
  userSelect: 'none',
  zIndex: 180,
  border: '1px solid $panel',
  padding: '$0',
  boxShadow: '$4',
  minWidth: 200,
  font: '$ui',

  '& kbd': {
    marginLeft: '32px',
    fontSize: '$1',
    fontFamily: '$ui',
    fontWeight: 400,
  },

  '& kbd > span': {
    display: 'inline-block',
    width: '12px',
  },

  variants: {
    isMobile: {
      true: {
        '& kbd': {
          display: 'none',
        },
      },
    },
  },
})

/* -------------------------------------------------- */
/*                    Dropdown Menu                   */
/* -------------------------------------------------- */

export function DropdownMenuRoot({
  isOpen,
  onOpenChange,
  children,
}: {
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  children: React.ReactNode
}): JSX.Element {
  return (
    <DropdownMenu.Root dir="ltr" open={isOpen} onOpenChange={onOpenChange}>
      {children}
    </DropdownMenu.Root>
  )
}

export function DropdownMenuSubMenu({
  children,
  disabled = false,
  label,
}: {
  label: string
  disabled?: boolean
  children: React.ReactNode
}): JSX.Element {
  return (
    <DropdownMenu.Root dir="ltr">
      <RowButton
        as={DropdownMenu.TriggerItem}
        bp={breakpoints}
        disabled={disabled}
      >
        <span>{label}</span>
        <IconWrapper size="small">
          <ChevronRightIcon />
        </IconWrapper>
      </RowButton>
      <MenuContent
        as={DropdownMenu.Content}
        sideOffset={2}
        alignOffset={-2}
        isMobile={isMobile()}
      >
        {children}
        <DropdownMenuArrow offset={13} />
      </MenuContent>
    </DropdownMenu.Root>
  )
}

export const DropdownMenuDivider = styled(DropdownMenu.Separator, {
  backgroundColor: '$hover',
  height: 1,
  marginTop: '$2',
  marginRight: '-$2',
  marginBottom: '$2',
  marginLeft: '-$2',
})

export const DropdownMenuArrow = styled(DropdownMenu.Arrow, {
  fill: '$panel',
})

export function DropdownMenuButton({
  onSelect,
  children,
  disabled = false,
}: {
  onSelect?: () => void
  disabled?: boolean
  children: React.ReactNode
}): JSX.Element {
  return (
    <RowButton
      as={DropdownMenu.Item}
      bp={breakpoints}
      disabled={disabled}
      onSelect={onSelect}
    >
      {children}
    </RowButton>
  )
}

interface DropdownMenuIconButtonProps {
  onSelect: () => void
  disabled?: boolean
  children: React.ReactNode
}

export function DropdownMenuIconButton({
  onSelect,
  children,
  disabled = false,
}: DropdownMenuIconButtonProps): JSX.Element {
  return (
    <IconButton
      as={DropdownMenu.Item}
      bp={breakpoints}
      disabled={disabled}
      onSelect={onSelect}
    >
      {children}
    </IconButton>
  )
}

interface MenuCheckboxItemProps {
  checked: boolean
  disabled?: boolean
  onCheckedChange: (isChecked: boolean) => void
  children: React.ReactNode
}

export function DropdownMenuCheckboxItem({
  checked,
  disabled = false,
  onCheckedChange,
  children,
}: MenuCheckboxItemProps): JSX.Element {
  return (
    <RowButton
      as={DropdownMenu.CheckboxItem}
      bp={breakpoints}
      onCheckedChange={onCheckedChange}
      checked={checked}
      disabled={disabled}
    >
      {children}
      <DropdownMenu.ItemIndicator>
        <IconWrapper size="small">
          <CheckIcon />
        </IconWrapper>
      </DropdownMenu.ItemIndicator>
    </RowButton>
  )
}

/* -------------------------------------------------- */
/*                    Context Menu                   */
/* -------------------------------------------------- */

export function ContextMenuRoot({
  onOpenChange,
  children,
}: {
  onOpenChange?: (isOpen: boolean) => void
  children: React.ReactNode
}): JSX.Element {
  return (
    <ContextMenu.Root dir="ltr" onOpenChange={onOpenChange}>
      {children}
    </ContextMenu.Root>
  )
}

export function ContextMenuSubMenu({
  children,
  label,
}: {
  label: string
  children: React.ReactNode
}): JSX.Element {
  return (
    <ContextMenu.Root dir="ltr">
      <ContextMenu.TriggerItem as={RowButton} bp={breakpoints}>
        <span>{label}</span>
        <IconWrapper size="small">
          <ChevronRightIcon />
        </IconWrapper>
      </ContextMenu.TriggerItem>
      <ContextMenu.Content
        as={MenuContent}
        sideOffset={2}
        alignOffset={-2}
        isMobile={isMobile()}
      >
        {children}
        <ContextMenuArrow offset={13} />
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
}

export const ContextMenuDivider = styled(ContextMenu.Separator, {
  backgroundColor: '$hover',
  height: 1,
  margin: '$2 -$2',
})

export const ContextMenuArrow = styled(ContextMenu.Arrow, {
  fill: '$panel',
})

export function ContextMenuButton({
  onSelect,
  children,
  disabled = false,
}: {
  onSelect?: () => void
  disabled?: boolean
  children: React.ReactNode
}): JSX.Element {
  return (
    <RowButton
      as={ContextMenu.Item}
      bp={breakpoints}
      disabled={disabled}
      onSelect={onSelect}
    >
      {children}
    </RowButton>
  )
}

export function ContextMenuIconButton({
  onSelect,
  children,
  disabled = false,
}: {
  onSelect: () => void
  disabled?: boolean
  children: React.ReactNode
}): JSX.Element {
  return (
    <ContextMenu.Item
      as={IconButton}
      bp={breakpoints}
      disabled={disabled}
      onSelect={onSelect}
    >
      {children}
    </ContextMenu.Item>
  )
}

export function ContextMenuCheckboxItem({
  checked,
  disabled = false,
  onCheckedChange,
  children,
}: MenuCheckboxItemProps): JSX.Element {
  return (
    <RowButton
      as={ContextMenu.CheckboxItem}
      bp={breakpoints}
      onCheckedChange={onCheckedChange}
      checked={checked}
      disabled={disabled}
    >
      {children}
      <ContextMenu.ItemIndicator>
        <IconWrapper size="small">
          <CheckIcon />
        </IconWrapper>
      </ContextMenu.ItemIndicator>
    </RowButton>
  )
}
