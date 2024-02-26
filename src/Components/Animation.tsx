

const Animation = () => {
  return (
    <div className="px-0 md:px-6  mx-auto">
      <section className="portfolio-section" id="portfolio">
        <div className="container-fluid">
          <div className="container mx-auto px-2 md:px-5 py-2 lg:px-6 lg:pt-4">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-full flex-wrap">
                <div className=" w-1/3 p-1 md:p-2">
                  <video
                   loop
                  //  autoPlay
                   muted
                   controls
                  
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src="https://fameitech.com/video_animations/3d_ABC_for_kids.mp4"
                  />
                </div>
                <div className=" w-1/3 p-1 md:p-2">
                <video
                   loop
                  //  autoPlay
                   muted
                  
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src="https://fameitech.com/video_animations/charity_water_org_motion_graphics.mp4"
                  />
                </div>
                <div className=" w-1/3 p-1 md:p-2">
                <video
                   loop
                  //  autoPlay
                   muted
                   controls
                  
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src="https://fameitech.com/video_animations/real_estate_3d_amintion.mp4"
                  />
                </div>
                <div className=" w-1/3 p-1 md:p-2">
                <video
                   loop
                  //  autoPlay
                   muted
                   controls
                  
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src="https://fameitech.com/video_animations/short_animation_3_for_social_media_gigs.mp4"
                  />
                </div>
                <div className=" w-1/3 p-1 md:p-2">
                <video
                   loop
                  //  autoPlay
                   muted
                   controls
                  
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src="https://fameitech.com/video_animations/whiteboard_animation_Game_vs_Gamer.mp4"
                  />
                </div>
                <div className=" w-1/3 p-1 md:p-2">
                <video
                   loop
                  //  autoPlay
                   muted
                   controls
                  
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src="https://fameitech.com/video_animations/Tugella.mp4"
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Animation