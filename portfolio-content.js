/*
  PORTFOLIO TEXT EDITOR

  Edit only the words between the backtick marks (`like this`).
  Keep the names on the left, punctuation after each entry, and all brackets intact.
  Save this file as portfolio-content.js when you are finished.
*/

window.PORTFOLIO_CONTENT = {
  header: {
    eyebrow: `// Mechanical Engineering Portfolio`,
    name: `Mark Evenson`,
    role: `Mechanical Engineering Student — University of Miami`,
    concentration: `Internal Combustion`,
    graduation: `May 2028`,
  },

  caseStudy: {
    sectionTitle: `Case Study`,
    category: `PERSONAL PROJECT`,
    tools: `SOLIDWORKS + FEA`,
    title: `Reverse-Engineered Suspension Redesign`,
    subtitle: `Mazda CX-3 front lower control arm, reverse-engineered, then redesigned for rally-spec. FOS improved from 0.6 to 2.3 at equal mass`,
    overview: `I hand-measured and photographed the front lower control arm off my dad's 2021 Mazda CX-3, then rebuilt it in SolidWorks. Baseline FEA under a worst-case cornering load showed the OEM part exceeding yield strength in several areas, so I redesigned it for rally use with a stronger alloy, added cross-bracing, and lightening holes to offset the added mass, then validated the result against the original with FEA.`,
    originCaption: `The project started when my dad and I were repairing his crashed CX-3 this summer, which gave me hands-on access to a real suspension component.`,

    steps: [
      {
        title: `Measure the OEM part`,
        description: `Hand-measured the control arm in place on the car: length, bolt spacing, bushing bore diameter, wall thickness, and general cross-section shape.`,
      },
      {
        title: `Model the as-is geometry`,
        description: `Rebuilt the part in SolidWorks from my measurements, matching points and dimensions so the model reflects the actual arm.`,
      },
      {
        title: `Compare baseline & rally load cases`,
        description: `Established the OEM stress pattern under estimated worst-case driving conditions, combining cornering and static loads. Under that rally case, the 4.70 lb OEM arm reached 344 MPa maximum stress and a minimum FOS of ~0.6, confirming that it exceeded yield and needed reinforcement.`,
      },
      {
        title: `Upgrade material & add cross-bracing`,
        description: `Swapped from generic plain carbon steel (Sy ≈ 220 MPa) to AISI 4130 steel, normalized (Sy ≈ 460 MPa), a real alloy used in rally fabrication, and added internal cross-bracing ribs spanning the open C-channel to resist twisting under cornering/braking loads, a common race fabrication technique.`,
      },
      {
        title: `Add lightening holes`,
        description: `Removed material from confirmed low-stress zones with a row of lightening holes, bringing the redesign down to 4.68 lb, 0.02 lb lighter than the 4.70 lb OEM baseline, while retaining the strength gained from the 4130 steel and cross-bracing.`,
      },
      {
        title: `Validate with FEA`,
        description: `Re-ran the final design under the same worst-case load for a direct comparison. Maximum stress fell from 344 MPa to 197 MPa, minimum FOS rose from ~0.6 to ~2.3, and mass changed from 4.70 lb to 4.68 lb.`,
      },
    ],

    assumptions: `Loads were estimated from vehicle weight and a standard cornering g-force, not manufacturer data. With more time, I'd validate against real telemetry and refine the rib geometry further.`,
    results: {
      eyebrow: `Final comparison`,
      title: `OEM baseline vs. rally redesign`,
      baselineLabel: `Before`,
      baselineTitle: `OEM baseline`,
      redesignLabel: `After`,
      redesignTitle: `Rally redesign`,
      outcome: `43% lower maximum stress and a 3.8× higher factor of safety at effectively the same mass.`,
    },
  },

  internship: {
    sectionTitle: `Professional Experience`,
    tag: `Summer 2026 · Dunham Associates`,
    title: `MEP Design & Field Engineering`,
    description: `Supported critical facility projects across healthcare, bio laboratories, and data centers. My work connected existing-condition modeling and HVAC design in Revit with field verification, airflow calculations, and direct observation of installed mechanical systems.`,
    tools: [`REVIT`, `BLUEBEAM`, `HVAC DESIGN`, `FIELD REVIEW`],

    modeling: {
      tag: `Revit · HVAC Design · Existing Conditions`,
      title: `Mechanical system modeling & scan to model coordination`,
      description: `Created coordinated 3D HVAC layouts in Revit, using field-captured existing-condition geometry to develop and verify duct and equipment routing around structure, installed equipment, and neighboring systems.`,
    },
    fieldReview: {
      tag: `Bluebeam · On Site`,
      title: `Direct field review`,
      description: `Compared design documents with installed piping and equipment in a mechanical room, documented field conditions, and brought site observations back into the design process.`,
    },
    siteObservation: {
      tag: `Construction Observation`,
      title: `Seeing systems beyond the model`,
      description: `Visited active construction sites with fellow interns to observe installation sequencing, equipment placement, and coordination between design and field teams.`,
    },
  },

  involvement: {
    sectionTitle: `Engineering Involvement`,
    tag: `AIAA · Hands-On Build`,
    title: `High-Power Rocketry — Level 1 Certified`,
    description: `Participated in the build and preparation of a high-power rocket through AIAA, gaining experience taking a physical aerospace project from assembly toward launch. Earned Level 1 high-power rocketry certification.`,
  },

  coursework: {
    sectionTitle: `Additional SolidWorks Work`,
    tag: `Coursework · CAD Practice`,
    title: `Selected Modeling Exercises`,
    description: `Selected exercises from a SolidWorks course, included to show additional practice with feature-based part modeling, patterns, cuts, fillets, and repeated geometry.`,
    items: [
      {
        title: `Patterned Circular Form`,
        detail: `Circular patterns · Cut features`,
      },
      {
        title: `Treaded Wheel`,
        detail: `Spokes · Repeated tread geometry`,
      },
      {
        title: `Gusseted Mounting Block`,
        detail: `Fillets · Holes · Gusseted form`,
      },
    ],
  },

  skills: {
    sectionTitle: `Technical Skills`,
    items: [
      `SolidWorks`,
      `SolidWorks Simulation / FEA`,
      `Revit`,
      `Bluebeam Revu`,
      `Field Verification`,
      `GD&T`,
      `MATLAB`,
      `Reverse Engineering`,
    ],
  },

  footer: {
    copyright: `© 2026 — Mark Evenson`,
  },
};
