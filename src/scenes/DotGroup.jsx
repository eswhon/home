import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="https://euon.social"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="https://blog.euon.social"
        className={`${
          selectedPage === "blog" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("blog")}
      />

      <AnchorLink
        href="https://galeri.euon.social"
        className={`${
          selectedPage === "galeri" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("galeri")}
      />

      <AnchorLink
        href="https://channel.euon.social"
        className={`${
          selectedPage === "channel" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("channel")}
      />

      <AnchorLink
        href="https://formsubmit.co/el/babidi"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
