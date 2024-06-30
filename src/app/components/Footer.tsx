import React from "react";

const FooterSection = () => {
  return (
    <section className="relative border border-primary mt-10 rounded-xl bg-black md:mx-10 md:p-10">
      <div className="mx-auto mt-0 max-w-6xl px-4 pt-20 md:pt-0 lg:px-28">
        <a target="_blank" href="https://playgen.io">
          <h4 className="pb-10 underline text-right -mt-1 text-2xl text-white">visit playgen.io &gt;</h4>
        </a>
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-4">
          <div className="relative">
            <dt className="text-blueGray-600 relative mb-0 text-center text-2xl font-semibold leading-relaxed text-white">
              <img className="absolute left-0 right-0 z-10 mx-auto mt-10 h-28" src="https://rkbzwluhocwgxhhuwvjq.supabase.co/storage/v1/object/public/assets/assets/crossword%20-%20poster.png" alt="Poster Image" />
              <img className="mb-5 h-full w-full rounded-2xl object-contain shadow transition duration-1000 hover:scale-105" src="https://rkbzwluhocwgxhhuwvjq.supabase.co/storage/v1/object/public/assets/slides/2.png" alt="Game Image" />
              Extremely Customizable Games
            </dt>
            <dd className="mt-0 mb-5 text-center text-lg leading-7 text-white">Curated from your content and social, it creates unique engaging puzzles that resonate with your audience using AI</dd>
          </div>
          <div className="relative">
            <dt className="text-blueGray-600 mb-0 text-center text-2xl font-semibold leading-relaxed text-white">
              <img className="mb-5 h-full w-full rounded-2xl object-contain shadow transition duration-1000 hover:scale-105" src="https://rkbzwluhocwgxhhuwvjq.supabase.co/storage/v1/object/public/assets/slides/3.png" alt="Monetization Image" />
              Monetization (Optional)
            </dt>
            <dd className="mt-0 mb-5 text-center text-lg leading-7 text-white">Create revenue streams with Ad Revenue, Rewarded Ads, and Micro-Payments.</dd>
          </div>
          <div className="relative">
            <dt className="text-blueGray-600 relative mb-0 text-center text-2xl font-semibold leading-relaxed text-white">
              <img className="mb-5 h-full w-full rounded-2xl object-contain shadow transition duration-1000 hover:scale-105" src="https://rkbzwluhocwgxhhuwvjq.supabase.co/storage/v1/object/public/assets/slides/4.png" alt="Community Image" />
              <div className="absolute bottom-24 right-0 left-0 z-10 mx-auto flex h-[50px] w-[300px] flex-row items-center justify-center rounded-md bg-white">
                <img className="object-fit -ml-14 mr-2 h-8" src="https://rkbzwluhocwgxhhuwvjq.supabase.co/storage/v1/object/public/assets/assets/crossword%20-%20poster.png" alt="Community Logo" />
                <span className="font-ny-post text-[16px] text-black">Log In to view your score</span>
              </div>
              Community
            </dt>
            <dd className="mt-0 mb-5 text-center text-lg leading-7 text-white">Strengthen your community with daily game challenges, leaderboards, and sharing.</dd>
          </div>
          <div className="relative">
            <dt className="text-blueGray-600 mb-0 text-center text-2xl font-semibold leading-relaxed text-white">
              <img className="mb-5 h-full w-full rounded-2xl object-contain shadow transition duration-1000 hover:scale-105" src="https://rkbzwluhocwgxhhuwvjq.supabase.co/storage/v1/object/public/assets/slides/5.png" alt="Promote Image" />
              Promote
            </dt>
            <dd className="mt-0 mb-5 text-center text-lg leading-7 text-white">Promote your games and puzzles with automatic social posting and marketing automation.</dd>
          </div>
          <div className="relative">
            <dt className="text-blueGray-600 mb-0 text-center text-2xl font-semibold leading-relaxed text-white">
              <img className="mb-5 h-full w-full rounded-2xl object-contain shadow transition duration-1000 hover:scale-105" src="https://rkbzwluhocwgxhhuwvjq.supabase.co/storage/v1/object/public/assets/slides/6.png" alt="Eco System Image" />
              Eco System (Optional)
            </dt>
            <dd className="mt-0 mb-5 text-center text-lg leading-7 text-white">Monetize your exclusive game content by selling your games and puzzles to millions of players every day.</dd>
          </div>
          <div className="relative">
            <dt className="text-blueGray-600 mb-0 text-center text-2xl font-semibold leading-relaxed text-white">
              <img className="mb-5 h-full w-full rounded-2xl object-contain shadow transition duration-1000 hover:scale-105" src="https://rkbzwluhocwgxhhuwvjq.supabase.co/storage/v1/object/public/assets/slides/7.png" alt="Sponsor Branded Games Image" />
              Sponsor Branded Games
            </dt>
            <dd className="mt-0 mb-5 text-center text-lg leading-7 text-white">Improve your KPIs with branded games sponsored by deals, offering valuable inventory.</dd>
          </div>
        </dl>
      </div>
      <div className="bg-primary px-4 py-10 text-sm text-white/40 lg:px-28">
        Copyright Notice: All materials on this website, including but not limited to text, graphics, logos, icons, images, audio clips, and software and excluding external logos, are the property of Jogo R. N. Studio hellojogo.com or its content suppliers and are protected by international
        copyright laws. The compilation (meaning the collection, arrangement, and assembly) of all content on this site is the exclusive property of Jogo R. N. Studio hellojogo.com and is protected by international copyright laws. No material from this website may be copied, reproduced, republished,
        uploaded, posted, transmitted, or distributed in any way without the express written permission of Jogo R. N. Studio hellojogo.com. Modification of the materials or use of the materials for any other purpose is a violation of Jogo R. N. Studio hellojogo.com copyright and other proprietary
        rights. Please note that the enforcement of these rights can sometimes be complex, and may require legal action if someone uses your content without permission. If you have serious concerns about protecting your content, you may wish to consult with a lawyer to understand your rights and
        responsibilities better.
      </div>
    </section>
  );
};

export default FooterSection;
