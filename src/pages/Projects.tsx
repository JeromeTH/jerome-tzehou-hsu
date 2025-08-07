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
        description="Project lead in the development of a smart search engine for Cornell Data Science Project Team. 
        System aims to help current and prospective members understand the team's historical codebases. 
        It performs a context-aware traversal of the codebase, deconstructs the code using abstract syntax trees, 
        and embeds the code into a vector database for semantic search."
        state="Paused"
        githubLink="https://github.com/CornellDataScience/smart-search"
        demoLink={null}
      />

      <ProjectCard
        image={critter}
        title="Critter World Evolution Simulator"
        description="Class project of CS 2112: Honors Object-Oriented Programming. Built the parser and interpreter of a custom critter behavior language in Java, 
        multithreaded simulator and GUI using the MVC design pattern and JavaFX. Received <strong>A+ grade</strong> and <strong>highest project score</strong> in the honors Cornell CS cohort."
        state="Completed. Unable to show code due to Cornell's academic integrity policy."
        githubLink={null}
        demoLink={null}
      />

      <ProjectCard
        image={pltv}
        title="Lifetime Value Prediction for Mobile Advertising"
        description="Independently developed <strong>lifetime value prediction feature</strong> for mobile advertising startup Bubbleye. Utilized <strong>advanced machine learning techniques</strong> to predict user lifetime value, enhancing ad targeting and campaign effectiveness."
        state="Completed"
        githubLink={null}
        demoLink={null}
      />
    </div>
  )
}
