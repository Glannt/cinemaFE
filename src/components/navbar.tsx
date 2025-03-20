import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
// import { TRANSITION_EASINGS } from '@heroui/framer-transitions';
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { User } from "lucide-react";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react";
import React from "react";

import { LoginSignupTabs } from "./form/login/LoginSignup";
import { LanguageDropdown } from "./language-dropdown";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon } from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className='hidden lg:inline-block' keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement='outside'
      placeholder='Search...'
      startContent={
        <SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
      }
      type='search'
    />
  );

  return (
    <HeroUINavbar
      className={` ${scrollPosition > 0 ? "bg-[#272323] bg-opacity-80" : "bg-transparent"}`}
      isBlurred={scrollPosition > 0}
      maxWidth='xl'
      position='sticky'
      shouldHideOnScroll={false}
      onScrollPositionChange={(position) => {
        setScrollPosition(position);
      }}
    >
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand className='gap-3 max-w-fit'>
          <Link className='flex justify-start items-center gap-1' color='foreground' href='/'>
            <Logo />
            <p className='font-bold text-inherit'>ACME</p>
          </Link>
        </NavbarBrand>
        <div className='hidden lg:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
        <NavbarItem className='hidden sm:flex gap-2'>
          {/* <Link isExternal href={siteConfig.links.twitter} title='Twitter'>
            <TwitterIcon className='text-default-500' />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title='Discord'>
            <DiscordIcon className='text-default-500' />
          </Link> */}
          {/* <Link isExternal href={siteConfig.links.github} title='GitHub'>
            <GithubIcon className='text-default-500' />
          </Link> */}

          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>{searchInput}</NavbarItem>
        <NavbarItem className='hidden md:flex basis-1/6'>
          <LanguageDropdown />
        </NavbarItem>
        <NavbarItem className='hidden md:flex'>
          <Button
            isExternal
            as={Link}
            className='text-sm font-normal text-default-600 bg-default-100'
            startContent={<User className='text-gray-200 ' />}
            variant='ghost'
            onPress={onOpen}
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className='text-default-500' />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href='#'
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      {isOpen === true && (
        <Modal
          isOpen={isOpen}
          motionProps={{
            variants: {
              enter: {
                scale: 1, // Use 1 instead of percentage
                y: "var(--slide-enter)",
                opacity: 1,
                transition: {
                  scale: {
                    duration: 0.4,
                    // ease: TRANSITION_EASINGS.ease,
                  },
                  opacity: {
                    // duration: 0.4,
                    // ease: TRANSITION_EASINGS.ease,
                  },
                  y: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.6,
                  },
                },
              },
              exit: {
                scale: 1.1, // Use 1.1 instead of percentage
                y: "var(--slide-exit)",
                opacity: 0,
                transition: {
                  duration: 0.3,
                  // ease: TRANSITION_EASINGS.ease,
                },
              },
            },
          }}
          size='lg'
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <ModalBody>
                <div className='sm:max-w-[450px] w-full'>
                  <LoginSignupTabs />
                </div>
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
      )}
    </HeroUINavbar>
  );
};
