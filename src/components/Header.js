import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
        <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
        <HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
        <HeaderItem Icon={SearchIcon} title="SEARCH" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <p className="text-3xl font-[Verdana] text-red-300 text-center">
        Movie Fetcher
      </p>
    </header>
  );
};

export default Header;
