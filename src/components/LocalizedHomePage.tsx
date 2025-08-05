"use client";

import React from "react";
import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocalizedContent } from "@/app/resources/languages";

export function LocalizedHomePage() {
  const { locale } = useLanguage();
  const content = useLocalizedContent(locale);

  return (
    <>
      <Flex 
        maxWidth={68} 
        fillWidth 
        gap="24"
        direction="column" 
        horizontal="center"
        marginBottom="32"
      >
        <Flex 
          direction="column"
          fillWidth
          gap="12"
          horizontal="center"
        >
          <Avatar
            size="l"
            src={content.person.avatar}
            style={{
              filter: 'grayscale(100%)',
            }}
          />
          <RevealFx translateY="4">
            <Heading
              variant="display-strong-s"
              align="center"
            >
              {content.home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2}>
            <Text
              variant="display-default-s"
              color="neutral-medium"
              align="center"
            >
              {content.home.subline}
            </Text>
          </RevealFx>
        </Flex>
      </Flex>
    </>
  );
}
