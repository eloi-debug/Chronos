(function () {
  const { B, pt, circ, line } = window.TourKit;
  (window.TOUR_REGISTRY = window.TOUR_REGISTRY || []).push({
    id: "us-slavery-civil-war",
    regions: ["North America"],
    category: "political",
    title: "Slavery, the Civil War and Reconstruction",
    description: "How slavery divided the United States, why eleven Southern states seceded, how a war to preserve the Union became a war to end slavery, and why Reconstruction (1865–77) fell short of its promises. The Civil War and Reconstruction are treated through the political and constitutional record; battles are not described.",
    scope: "The United States",
    span: "1820s to 1877 CE",
    tags: ["slavery", "Civil War", "Emancipation", "Thirteenth Amendment", "Reconstruction"],
    chapters: [
      {
        id: "road-to-war", title: "A nation divided over slavery (1820s–1860)", subject: "Sectional crisis",
        date: { start: 1820, end: 1860, kind: "period" }, camera: { center: [-90.0, 36.0], zoom: 3.8 },
        text: "Britannica says the North and South had been divided for decades over slavery, and that measures such as the Missouri Compromise and the Compromise of 1850 failed to settle it. The Southern economy rested on plantation agriculture, in which enslaved African Americans did most of the work, while the North relied more on manufacturing. The Compromise of 1850, the Kansas–Nebraska Act of 1854 and the Supreme Court's Dred Scott decision of 1857 opened all the territories to slavery. By the 1850s abolitionism was growing in the North, causing Southern states to fear federal action against slavery.",
        what: "Political compromises fail to resolve slavery's expansion.",
        where: "The South, the North and the western territories.",
        why: "Britannica calls slavery the root cause of the war.",
        uncertain: "The Missouri Compromise is named but not dated in the excerpts I read, so this chapter's range (1820s) is approximate. This chapter does not describe enslaved people's own resistance or lives.",
        evidence: "attested", features: [], relatedSites: [], sources: ["brit-civil-war-causes", "brit-african-americans-civil-war", "brit-us-civil-war-politics"]
      },
      {
        id: "secession", title: "Secession and war (1860–1861)", subject: "Breakup of the Union",
        date: { start: 1860, end: 1861, kind: "event" }, camera: { center: [-80.0, 33.0], zoom: 5 },
        text: "Abraham Lincoln was elected president in 1860 on the antislavery platform of the new Republican Party. Eleven Southern states then seceded to protect what they saw as their right to keep slaves, organising as the Confederate States of America. Britannica says the Confederate constitution expressly guaranteed slavery. Confederate forces opened fire on Fort Sumter on 12 April 1861, beginning the Civil War. Britannica adds that preservation of the Union, not abolition, was Lincoln's initial objective.",
        what: "Eleven states leave the Union and a war begins.",
        where: "The South; Fort Sumter in Charleston harbour.",
        why: "The sources I read say the states seceded to protect slavery.",
        uncertain: "Britannica's description of Southern belief ('what they saw as their right') reflects the secessionists' stated view. The sources I read do not describe the four slave states that stayed in the Union beyond naming them.",
        evidence: "attested", features: [pt("Fort Sumter", -79.8747, 32.7523, "conflict", "approximate", "attested", "Where the war began, 12 April 1861.")],
        relatedSites: [], sources: ["brit-civil-war-causes", "brit-us-civil-war-politics", "brit-african-americans-civil-war"]
      },
      {
        id: "emancipation", title: "From union to emancipation (1862–1865)", subject: "War aim changes",
        date: { start: 1862, end: 1865, kind: "period" }, camera: { center: [-85.0, 35.0], zoom: 4.2 },
        text: "Britannica says Lincoln at first believed in gradual emancipation with compensation for slaveholders. In September 1862 he issued a preliminary proclamation, followed by the Emancipation Proclamation of 1 January 1863, freeing enslaved people in states in rebellion. Black soldiers numbered 178,895 in the Union armies by war's end. Britannica adds that Lincoln came to see emancipation as a way to influence European opinion, deprive the Confederacy of labour and add recruits. Congress passed the Thirteenth Amendment on 31 January 1865, which abolished slavery, and nearly four million people were freed once it was ratified.",
        what: "The war becomes a war to end slavery.",
        where: "The rebel states, then the whole country.",
        why: "Britannica gives military and diplomatic reasons alongside moral ones.",
        uncertain: "The Emancipation Proclamation did not apply to the four loyal slave states. Britannica says Lincoln was uncertain of its constitutionality, which is why he urged an amendment. Enslaved people's own actions in forcing emancipation are not described in the excerpts I read.",
        evidence: "attested", features: [], relatedSites: [], sources: ["brit-us-civil-war-politics", "brit-african-americans-civil-war", "brit-civil-war-causes"]
      },
      {
        id: "reconstruction", title: "Reconstruction and its limits (1865–1877)", subject: "Postwar settlement",
        date: { start: 1865, end: 1877, kind: "period" }, camera: { center: [-85.0, 33.0], zoom: 4.5 },
        text: "Britannica says the Union was preserved and nearly four million slaves were freed. The Fourteenth Amendment (1868) granted African Americans citizenship and the Fifteenth Amendment (1870) guaranteed their right to vote. But Britannica calls Reconstruction (1865–77) a period of disappointment and frustration for African Americans, since the new provisions were often ignored, especially in the South. Southern states enacted Black Codes resembling slave codes to restrict the movement of freedpeople and force them to work as plantation labourers at very low wages, and the Freedmen's Bureau, established in 1865, gave food and found jobs and homes.",
        what: "Legal equality is declared and then undermined.",
        where: "The former Confederate states.",
        why: "Britannica says the amendments were often ignored.",
        uncertain: "The sources I read do not explain how or why Reconstruction ended in 1877, or describe Jim Crow's rise or the violence used against Black voters. The Civil Rights Movement chapter of the 20th-century tour continues the story.",
        evidence: "attested", features: [], relatedSites: [], sources: ["brit-african-americans-civil-war", "brit-civil-war-causes"]
      }
    ]
  });
})();
