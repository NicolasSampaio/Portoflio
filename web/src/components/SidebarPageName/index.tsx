interface SidebarPageNameProps {
  pagename: string;
}

export function SidebarPageName({ pagename }: SidebarPageNameProps) {
  return (
    <div className="flex h-[45rem]">
      <h2
        className="flex items-center justify-center h-24 self-center w-40 -rotate-90
text-7.5xl whitespace-nowrap text-white"
      >
        {pagename}
      </h2>

      <span className="absolute w-96 h-2 border border-lincoliRed bg-lincoliRed rotate-90 rounded top-[25rem] -left-[3.5rem]"></span>
    </div>
  );
}
