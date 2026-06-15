import React from 'react';

export default function AlbumBanner() {
  return (
    <section className="w-full py-20 px-6 bg-background flex justify-center">
      <div className="container mx-auto max-w-[1400px] flex flex-col md:flex-row border border-accent">
        
        {/* Left Block */}
        <div className="md:w-[35%] bg-accent text-background p-8 md:p-12 flex items-center justify-center text-center border-b md:border-b-0 border-accent">
          <h3 className="font-bold uppercase tracking-widest text-lg md:text-xl font-season-mix">
            THE NEW ALBUM FROM ELEVATION<br />WORSHIP & MAVERICK CITY
          </h3>
        </div>
        
        {/* Right Block */}
        <div className="md:w-[65%] p-8 md:p-12 flex flex-col sm:flex-row items-center justify-around gap-12 bg-[#0c0c0c]">
          
          {/* Item 1 */}
          <div className="flex items-center gap-6">
            {/* Cross Icon */}
            <div className="text-accent flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M5 10h14" />
              </svg>
            </div>
            <p className="text-sm md:text-base font-semibold tracking-[0.15em] text-foreground font-season-mix max-w-[220px] uppercase leading-relaxed">
              YOU WOULD CROSS AN OCEAN<br />SO I WOULDN'T DROWN
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-6">
            {/* Dove Icon */}
            <div className="text-accent flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M21.9,8.9c-0.6-0.8-1.5-1.2-2.3-1.6c-0.2-0.1-0.4-0.1-0.6-0.2c-0.5-0.1-1.1,0.1-1.4,0.5 c-0.6,0.6-1,1.5-1.5,2.1c-0.2,0.3-0.5,0.4-0.9,0.3c-1-0.2-1.9-0.5-2.8-0.9c-0.8-0.4-1.6-0.8-2.3-1.3C9.5,7.3,9,6.7,8.5,6.1 C8,5.4,7.4,4.9,6.6,4.6C5.5,4.2,4.3,4.1,3.2,4.3c-0.5,0.1-0.8,0.5-0.9,1C2.1,5.8,2,6.3,2,6.8c0,0.5,0.1,1,0.3,1.4 c0.3,0.7,0.7,1.4,1.2,2C4,10.6,4.5,11,5,11.2c0.2,0.1,0.3,0.3,0.3,0.5c-0.1,0.5-0.2,0.9-0.5,1.3c-0.2,0.2-0.3,0.4-0.3,0.7 c0,0.4,0.3,0.7,0.6,0.9c0.9,0.6,2,1.1,3.1,1.3c0.4,0.1,0.8,0.1,1.2,0c0.3-0.1,0.5,0.1,0.6,0.3c0.1,0.3,0.1,0.6,0.1,0.9 c0,0.7,0.1,1.4,0.2,2.1c0.1,0.4,0.3,0.8,0.7,1c0.4,0.2,0.9,0.1,1.3-0.1c0.8-0.5,1.5-1.1,2.1-1.8c0.2-0.2,0.4-0.4,0.7-0.5 c0.6-0.2,1.3-0.3,1.9-0.3c0.4,0,0.9-0.1,1.2-0.4c0.4-0.4,0.6-0.9,0.9-1.4c0.5-0.9,1-1.7,1.6-2.5C22.4,10.6,22.4,9.6,21.9,8.9z"/>
              </svg>
            </div>
            <p className="text-sm md:text-base font-semibold tracking-[0.15em] text-foreground font-season-mix max-w-[250px] uppercase leading-relaxed">
              YOU'VE NEVER BEEN CLOSER<br />THAN YOU ARE RIGHT NOW
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
