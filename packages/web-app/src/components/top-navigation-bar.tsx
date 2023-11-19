import { Lightbulb } from "lucide-react";
import NextLink from "next/link";
import Text from "@/components/text";

export interface TopNavigationBarProps {
  title: string;
}

export default function TopNavigationBar(props: TopNavigationBarProps) {
  return (
    <nav className={"shadow-md"}>
      <div className="flex items-center gap-4 mx-auto max-w-screen-xl py-4 px-2">
        <div className="flex flex-1 gap-4">
          <Text as={NextLink} href={"/"} size="title-small">
            {props.title}
          </Text>
        </div>
      </div>
    </nav>
  );
}
