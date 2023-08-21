<script>
    import { Icon } from 'flowbite-svelte-icons';
    let experiences = [
        {
            institute: "Bangkit Academy 2023 - Jatinangor, Indonesia",
            experiences: ["Machine Learning Cohort (February 2023 - July 2023)"],
            description: "Bangkit is an independent campus program held by Dicoding Indonesia in collaboration with Google, GoTo, Traveloka. Bangkit has three learning paths, namely Machine Learning, Mobile Development, and Cloud Computing.",
            points: ["Develop Machine Learning model to classify trash using CNN", "Finish 5+ self pace course about Data Analysis, Mathematics, Tensorflow, and Machine Learning", "Create capstone project to classify trash and recycle it using android app"],
            skills: ["Tensorflow", "Python", "Data Analysis"]
        },
        {
            institute: "Angkasa Pura Sarana Digital - Tangerang, Indonesia",
            experiences: ["Airport Technology Intern (January 2023 - March 2023)"],
            description: "Angkasa Pura Sarana Digital (APSD) is a subsidiary of Angkasa Pura II. APSD is responsible for developing technology like Internet Services, Digital Security Services, Smart Toilets, and other digital services for Airports that Angkasa Pura II manages.",
            points: ["Develop a dashboard for Bus Management System App that has been developed before", "Develop front-end for the Airport Passenger Processing system that APSD is developing", "Plan for the new design of smart toilets for Soekarno-Hatta International Airport"],
            skills: ["PHP", "Laravel", "Codeigniter", "ReactJS", "MySQL"]
        },
        {
            institute: "Soedirman Digital School - Jatinangor, Indonesia",
            experiences: ["Mentor of Web Programming (September 2022 - November 2022)"],
            description: "Soedirman Digital School (SDS) is a program from the University of Jendral Soedirman (UNSOED) Student Committee. The program aims to improve the digital skill of UNSOED students, and the program has three Paths for learning. There are Data Science, Copywriting, and Web Programming.",
            points: ["Develop curriculum for the entire program of SDS Web Programming Path", "Make 14 slides of learning material for the program", "Guide more than 20 students to learn web programming and to make their website from scratch"],
            skills: ["ReactJS", "HTML", "CSS", "Javascript", "Teaching"]
        },
        {
            institute: "FlashCampus - Jatinangor, Indonesia",
            experiences: ["Front-End Engineer Intern (August 2022 - October 2022)"],
            description: "FlashCampus is a personal development platform that helps Indonesian college students better prepare for post-campus life by getting them inspired, knowledgeable, and connected to the best opportunities.",
            points: ["Develop a landing page for the launching of FlashCampus.", "Develop a new web app for opportunities and information for college students."],
            skills: ["NextJS", "MongoDB", "ReactJS", "AWS", "Tailwind CSS"]
        },
        {
            institute: "Tentorin Indonesia - Jatinangor, Indonesia",
            experiences: ["Front-End Engineer Intern (March 2022 - July 2022)"],
            description: "Tentorin is an Edutech startup with a vision to provide justice for education by implementing peer-to-peer learning.",
            points: ["Develop a new collection feature for Tentorin Website.", "Apply clean code to existing code."],
            skills: ["NextJS", "MongoDB", "ReactJS", "AWS"]
        },
        {
            institute: "Kompeten Co - Jatinangor, Indonesia",
            experiences: ["Front-End Developer (February 2021 - April 2022)"],
            description: "Kompeten is an Edutech startup that assists students or job seekers in developing the soft skills needed by the industry.",
            points: ["Built first Minimum Viable Product (MVP-0) using Next JS within two months.", "Led new developers to work together developing MVP-1.", "Apply Google Analytics to web apps."],
            skills: ["NextJS", "MongoDB", "ReactJS", "Wordpress", "Chakra UI"]
        }
    ]
</script>

<section id="experience" class="mt-5">
    <div class="bg-red rounded-lg w-full border-4 border-black drop-shadow-card p-6 font-dm-serif-text">
        <h2 class="text-4xl">Experiences</h2>
        <div
            id="ExpereinceList"
            class="mt-4 grid gap-6 w-full grid-flow-col overflow-auto no-scrollbar py-2"
        >
            {#each experiences as experience}
                <div
                    class="bg-white drop-shadow-card p-2 rounded-lg w-[400px]"
                >
                    <p class="text-xl font-bold border-b-2 border-greyish pb-1">{experience.institute}</p>
                    {#each experience.experiences as exp}
                        <p class="text-base">{exp}</p>
                    {/each}
                    <p class="text-base mt-2">
                        {experience.description}
                    </p>
                    <ul class="text-base list-disc list-inside mt-1">
                        {#each experience.points as point}
                            <li>{point}</li>
                        {/each}
                    </ul>
                    <p><span class="font-bold mt-1">Skills: </span>{experience.skills.join(", ")}</p>
                </div>
            {/each}
        </div>
        <div
            class="flex gap-10 justify-center mt-3"
        >
            <button
                class="text-4xl font-bold bg-slate-300 w-[50px] h-[50px] rounded-full"
                on:click={() => {document.getElementById("ExpereinceList").scrollLeft -= 424}}
            >
                {"<"}
            </button>
            <button
                class="text-4xl font-bold bg-slate-300 w-[50px] h-[50px] rounded-full"
                on:click={() => {document.getElementById("ExpereinceList").scrollLeft += 424}}
            >
                {">"}
            </button>
        </div>
    </div>
</section>