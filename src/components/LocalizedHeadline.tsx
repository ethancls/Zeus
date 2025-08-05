"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useLocalizedContent } from "@/app/resources/languages";
import { Heading, Text, RevealFx } from "@/once-ui/components";

export function LocalizedHeadline() {
  const { locale } = useLanguage();
  const content = useLocalizedContent(locale);
  
  return (
    <>
      <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
        <Heading wrap="balance" variant="display-strong-l">
          {content.home.headline}
        </Heading>
      </RevealFx>
      <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
          {content.home.subline}
        </Text>
      </RevealFx>
    </>
  );
}
