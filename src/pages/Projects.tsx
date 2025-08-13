import ProjectCard from '../components/ProjectCard'
import taihu from '../assets/taihu-mdd.svg'
import pltv from '../assets/pltv.jpg'
import smartsearch from '../assets/smartsearch.png'
import wildfin from '../assets/wildfin.png'
import critter from '../assets/critter.png'

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      <ProjectCard
        image={taihu}
        title="SearchGym: Composable Design-Space Engine for Hybrid RAG Systems"
        description={
          <>
            <p>
              An AI search platform with a <strong>typed algebra of retrieval components</strong> that <strong>spans the design space</strong> of hybrid RAG systems.
            </p>
            <p>
              Inspired by Docker/Kubernetes, it includes a <strong>custom state and image manager</strong> for reproducible system execution, and a <strong>live monitoring interface</strong> for benchmarking and feedback-driven evolution.
            </p>
            <p>
              Planned to be released alongside a <strong>system-design paper</strong> and <strong>open-source release</strong>.
            </p>
          </>
        }
        state="Active"
        githubLink="https://github.com/NCL-TAIHU/RAG"
        demoLink={null}
      />

      <ProjectCard
        image={wildfin}
        title="WildFins: Scalable Video Training Framework for Video Model Experimentation"
        description={
          <>
            <p>
              WildFins is a <strong>PyTorch-based framework</strong> for large-scale video model experimentation, designed to support rapid benchmarking of video understanding models. Inspired by DeepMind’s VideoReader, it enables <strong>efficient, reproducible training</strong> over long-form, multi-part videos with minimal overhead.
            </p>
            <ul className="list-disc pl-6 my-2">
              <li><strong>Clean separation</strong> between model, data, and evaluation configuration</li>
              <li><strong>Full reproducibility</strong> of training runs</li>
              <li><strong>Seamless scaling</strong> to multi-GPU setups and long video sequences</li>
            </ul>
            <p>
              This framework powered the creation and benchmarking of a <strong>new in-situ animal behavior dataset</strong> for <strong>NeurIPS 2025</strong> (Datasets and Benchmarks track, under review).
            </p>
          </>
        }
        state="Submitted"
        githubLink={null}
        demoLink={null}
      />

      <ProjectCard
        image={smartsearch}
        title="CDS SmartSearch"
        description={
          <>
            <p>
              Project lead building a smart search engine for the Cornell Data Science Project Team to help members explore and understand historical codebases.
            </p>
            <ul className="list-disc pl-6 my-2">
              <li><strong>Traversal:</strong> context-aware codebase walking</li>
              <li><strong>Analysis:</strong> AST-driven code deconstruction</li>
              <li><strong>Search:</strong> semantic retrieval via vector embeddings</li>
            </ul>
          </>
        }
        state="Paused"
        githubLink="https://github.com/CornellDataScience/smart-search"
        demoLink={null}
      />

      <ProjectCard
        image={critter}
        title="Critter World Evolution Simulator"
        description={
          <>
            <p>
              Class project for <strong>CS 2112: Honors Object-Oriented Programming</strong>. Built a full simulation of evolving critters driven by a custom behavior language.
            </p>
            <ul className="list-disc pl-6 my-2">
              <li><strong>Language tooling:</strong> parser and interpreter for the DSL (Java)</li>
              <li><strong>Engine:</strong> multithreaded simulator</li>
              <li><strong>UI:</strong> JavaFX GUI using the <strong>MVC</strong> pattern</li>
            </ul>
            <p><strong>Result:</strong> A+ grade and highest project score in the honors cohort.</p>
          </>
        }
        state="Completed. Unable to show code due to Cornell's academic integrity policy."
        githubLink={null}
        demoLink={null}
      />

      <ProjectCard
        image={pltv}
        title="Lifetime Value Prediction for Mobile Advertising"
        description={
          <>
            <p>
              Independently developed a <strong>lifetime value (LTV) prediction</strong> feature for Bubbleye, a mobile advertising startup.
            </p>
            <ul className="list-disc pl-6 my-2">
              <li><strong>Modeling:</strong> user-level LTV forecasting for campaign optimization</li>
              <li><strong>Pipeline:</strong> data preprocessing, training, evaluation, and deployment hooks</li>
              <li><strong>Impact:</strong> improved targeting and budget allocation</li>
            </ul>
          </>
        }
        state="Completed"
        githubLink={null}
        demoLink={null}
      />
    </div>
  )
}
