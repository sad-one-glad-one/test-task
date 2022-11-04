import React from "react"
import { IconAntiAge } from "./icons/IconAntiAge"
import { IconAntioxydants } from "./icons/IconAntioxydants"
import { IconAntistress } from "./icons/IconAntistress"
import { IconCalmness } from "./icons/IconCalmness"
import { IconChevronUp } from "./icons/IconChevronUp"
import { IconCross } from "./icons/IconCross"
import { IconFemaleHealth } from "./icons/IconFemaleHealth"
import { IconImmunity } from "./icons/IconImmunity"
import { IconJoints } from "./icons/IconJoints"
import { IconLogIn } from "./icons/IconLogIn"
import { IconMaleHealth } from "./icons/IconMaleHealth"
import { IconMemory } from "./icons/IconMemory"
import { IconMenu } from "./icons/IconMenu"
import { IconNavigation } from "./icons/IconNavigation"
import { IconOmega } from "./icons/IconOmega"
import { IconSkin } from "./icons/IconSkin"
import { IconSleep } from "./icons/IconSleep"
import { IconSlimmingDown } from "./icons/IconSlimmingDown"
import { IconSort } from "./icons/IconSort"
import { IconTrash } from "./icons/IconTrash"

const AppIcon = (props) => {
  switch (props.name?.toLowerCase()) {
    case "icon-anti-age":
      return <IconAntiAge {...props} />
    case "icon-antioxydants":
      return <IconAntioxydants {...props} />
    case "icon-antistress":
      return <IconAntistress {...props} />
    case "icon-calmness":
      return <IconCalmness {...props} />
    case "icon-chevron-up":
      return <IconChevronUp {...props} />
    case "icon-cross":
      return <IconCross {...props} />
    case "icon-female-health":
      return <IconFemaleHealth {...props} />
    case "icon-immunity":
      return <IconImmunity {...props} />
    case "icon-joints":
      return <IconJoints {...props} />
    case "icon-log-in":
      return <IconLogIn {...props} />
    case "icon-male-health":
      return <IconMaleHealth {...props} />
    case "icon-memory":
      return <IconMemory {...props} />
    case "icon-menu":
      return <IconMenu {...props} />
    case "icon-navigation":
      return <IconNavigation {...props} />
    case "icon-omega":
      return <IconOmega {...props} />
    case "icon-skin":
      return <IconSkin {...props} />
    case "icon-sleep":
      return <IconSleep {...props} />
    case "icon-slimming-down":
      return <IconSlimmingDown {...props} />
    case "icon-sort":
      return <IconSort {...props} />
    case "icon-trash":
      return <IconTrash {...props} />
    default:
      return <div />
  }
}

export { AppIcon }
