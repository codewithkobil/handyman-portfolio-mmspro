import React from "react";

const InfoService = () => {
    return (
        <section id="about" className="relative bg-slate-50 text-slate-800">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-12 lg:px-6">
                <div className="relative col-span-5">
                    <div className="absolute -left-6 -top-6 hidden h-24 w-24 grid-cols-6 gap-1 opacity-30 md:grid">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <span key={i} className="h-1.5 w-1.5 rounded bg-slate-300" />
                        ))}
                    </div>
                    <img
                        src="https://picsum.photos/seed/plumb1/600/400"
                        alt="Plumber with tools"
                        className="relative z-0 w-4/5 rounded-xl border border-slate-200 shadow-xl"
                    />
                    <img
                        src="https://picsum.photos/seed/plumb1/600/400"
                        alt="Fixing pipe"
                        className="relative z-10 -mt-16 ml-auto w-3/4 rounded-xl border border-slate-200 shadow-2xl"
                    />
                </div>

                <div className="col-span-7">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 mb-2">
                        About
                    </h2>
                    <h3 className="text-2xl font-bold text-slate-800">Professional Handyman Services</h3>
                    <p className="mt-4 max-w-2xl text-slate-600 text-lg">
                        Welcome to MMS PRO, your trusted local handyman service in Charleston, South Carolina. We offer reliable, professional, and affordable home repair and improvement solutions for homeowners, landlords, and small businesses. From plumbing and electrical work to painting, carpentry, and general maintenance — no job is too small or too big for our skilled team. We take pride in honest service, quality workmanship, and getting every job done right the first time. Serving Charleston, Mount Pleasant, North Charleston, Summerville, and nearby areas — ProFix Handyman is here to make your home work perfectly, so you can enjoy peace of mind.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InfoService;