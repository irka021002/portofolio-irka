<script>
    import Capsule from "./Capsule.svelte";
    import Button from "./Button.svelte";
    const redirectToLinkedIn = () => {
        location.href = "https://www.linkedin.com/in/kamal-irka/"
    }
    const redirectToResume = () => {
        location.href = "https://drive.google.com/file/d/1KWPvunZhSQsrkDLdMKBwbL7IAaY7UCvR/view?usp=sharing"
    }
</script>

<section id="about" class="grid grid-cols-4 md:grid-cols-12 gap-5">
    <div
        class="col-span-4 order-2 md:order-1 md:col-span-9 bg-orange p-6 rounded-lg border-4 border-black drop-shadow-card flex flex-col gap-5"
    >
        <p 
            class="font-outfit text-4xl"
        >
            Hellow! My name is Irfan Kamal,
        </p>
        <p
            class="font-poppins"
        >
            I am a full-stack developer with an interest in machine learning. I am currently studying at Padjadjaran University, majoring in computer science with a concentration in intelligent and graphical systems. I am often self-taught with high motivation to develop my technology skills. 
        </p>
        <div
            class="flex gap-2 flex-col md:flex-row"
        >
            <Capsule>
                #FullStackDeveloper
            </Capsule>
            <Capsule>
                #MachineLearningEngineer
            </Capsule>
            <Capsule>
                #WebDeveloper
            </Capsule>
        </div>
        <div
            class="flex gap-3 flex-col md:flex-row"
        >
            <Button on:click={redirectToLinkedIn}>
                Connect with me
            </Button>
            <Button on:click={redirectToResume}>
                Resume
            </Button>
        </div>
    </div>
    <div
        class="col-span-4 order-1 md:order-2 md:col-span-3 flex items-center justify-center drop-shadow-card border-4 border-black rounded-lg"
    >
        <img class="w-full h-full" src="/fp.png" alt="Foto Irfan kamal">
    </div>
</section>