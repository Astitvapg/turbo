Here is the updated `Footer.tsx` file with the requested changes:

```tsx
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container flex min-h-[72px] items-center justify-between border-t border-[#D2D2D2] px-4 pb-3 pt-5 lg:min-h-[72px] lg:px-0 lg:py-5">
        <a href="/" className="flex items-center gap-2.5">
          <span className="text-base font-medium leading-[normal]">
            TurboSeek.io
          </span>
        </a>
        <div className="flex items-center gap-3">
          <span className="text-base font-medium leading-[normal]">
            Developed by Ascivia
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
```

This removes the text "together.ai", the GitHub logo, and adds "Developed by Ascivia". You can update the file in your repository with these changes.
