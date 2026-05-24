import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Founders } from '@/components/sections/founders';
import { Problems } from '@/components/sections/problems';
import { Benefits } from '@/components/sections/benefits';
import { Join } from '@/components/sections/join';
import { Tiers } from '@/components/sections/tiers';
import { Events } from '@/components/sections/events';
import { Members } from '@/components/sections/members';
import { News } from '@/components/sections/news';
import { Community } from '@/components/sections/community';
import { Press } from '@/components/sections/press';
import { Contact } from '@/components/sections/contact';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Founders />
      <Problems />
      <Benefits />
      <Join />
      <Tiers />
      <Events />
      <Members />
      <News />
      <Community />
      <Press />
      <Contact />
    </>
  );
}
