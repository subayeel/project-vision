/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Home,
  BookHeart,
  Settings,
  ChevronUp,
  FlaskConical,
  Megaphone,
  Building,
  Brain,
  LightbulbOff, // For false religions
  Users, // For fake religious leaders, family systems
  History, // For history
  Camera, // For celebrity influence
  Newspaper, // For media biases
  Network, // For digital censorship, global governance
  Swords, // For Middle East violence
  Scale, // For secularism/democracy, justice
  Flag, // For nationalism
  DollarSign, // For economics/Riba
  GraduationCap, // For education
  Ghost, // For atheism's dark side, nihilism
  MessageCircleOff, // For anti-muslim propaganda
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const SidebarComponent = () => {
  const [currentPath, setCurrentPath] = useState("");
  // Set the current path when component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);

  // Menu items based on new project document
  const criticalExaminations = [
    {
      label: "Religious & Spiritual Systems",
      icon: FlaskConical,
      items: [
        {
          title: "False Religions",
          url: "/critical-examinations/false-religions",
          icon: LightbulbOff,
        },
        {
          title: "Fake Religious Leaders",
          url: "/critical-examinations/fake-religious-leaders",
          icon: Users,
        },
      ],
    },
    {
      label: "Media, History & Information",
      icon: Megaphone,
      items: [
        {
          title: "Anti-Muslim Propaganda",
          url: "/critical-examinations/anti-muslim-propaganda",
          icon: MessageCircleOff,
        },
        {
          title: "Manipulated History",
          url: "/critical-examinations/manipulated-history",
          icon: History,
        },
        {
          title: "Celebrity Influence",
          url: "/critical-examinations/celebrity-influence",
          icon: Camera,
        },
        {
          title: "Media Biases",
          url: "/critical-examinations/media-biases",
          icon: Newspaper,
        },
        {
          title: "Digital Censorship",
          url: "/critical-examinations/digital-censorship",
          icon: Network,
        },
      ],
    },
    {
      label: "Political & Governmental Systems",
      icon: Building,
      items: [
        {
          title: "Middle East Violence",
          url: "/critical-examinations/middle-east-violence",
          icon: Swords,
        },
        {
          title: "Fake Secularism & Democracy",
          url: "/critical-examinations/fake-secularism-democracy",
          icon: Scale,
        },
        {
          title: "Nationalism",
          url: "/critical-examinations/nationalism",
          icon: Flag,
        },
        {
          title: "Global Governance Bodies",
          url: "/critical-examinations/global-governance-bodies",
          icon: Network,
        },
        {
          title: "Deviant Islamic Governance",
          url: "/critical-examinations/deviant-islamic-governance",
          icon: Building,
        },
      ],
    },
    {
      label: "Philosophical & Social Systems",
      icon: Brain,
      items: [
        {
          title: "Atheism's Dark Side",
          url: "/critical-examinations/atheism-dark-side",
          icon: Ghost,
        },
        {
          title: "Current Family System",
          url: "/critical-examinations/current-family-system",
          icon: Users,
        },
        {
          title: "Exploitative Economics (Riba)",
          url: "/critical-examinations/exploitative-economics",
          icon: DollarSign,
        },
        {
          title: "Biased Education",
          url: "/critical-examinations/biased-education",
          icon: GraduationCap,
        },
        {
          title: "Modern Philosophical Trends",
          url: "/critical-examinations/modern-philosophical-trends",
          icon: Brain,
        },
      ],
    },
  ];

  // Function to determine if a link is currently active
  const isActive = (url: string) => {
    return currentPath === url;
  };

  // Custom menu item component with active state highlighting
  interface MenuItemProps {
    item: {
      title: string;
      url: string;
      icon: React.ComponentType;
    };
  }

  const MenuItemWithActiveState: React.FC<MenuItemProps> = ({ item }) => {
    const active = isActive(item.url);
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          className={
            active
              ? "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-sm bg-primary/10"
              : ""
          }
        >
          <a href={item.url}>
            <item.icon />
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex gap-4 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Brand logo"
                width={32}
                height={32}
                className="object-contain"
              />{" "}
              <div className="text-core flex flex-col font-semibold text-lg leading-3">
                <span className="tracking-wide text-lg m-0">
                  Project Vision
                </span>{" "}
                {/* Updated title */}
              </div>
            </Link>
            <ModeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={
                    isActive("/")
                      ? "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-sm bg-muted"
                      : ""
                  }
                >
                  <a href="/">
                    <Home size={16} />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={
                    isActive("/guide-your-friend")
                      ? "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-sm bg-muted"
                      : ""
                  }
                >
                  <a href="/guide-your-friend">
                    <BookHeart size={16} />
                    <span>Guide your Friend</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {criticalExaminations.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="flex items-center gap-2">
              {group.icon && <group.icon size={16} />}
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <MenuItemWithActiveState key={item.title} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Settings /> Settings
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/privacy-policy">Privacy & Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/about-us">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/contact-us">Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarComponent;
