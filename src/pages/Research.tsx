import ResearchCard from '../components/ResearchCard'
import covidAggressionImage from '../assets/covid-aggression.png'

// Fish emoji placeholder image
const fishImage = '🐟'

export default function Research() {
  return (
    <div>
      <h1>Research</h1>

      <ResearchCard
        image={fishImage}
        title="WildFin: A Video Dataset of Fish Behavior In-the-Wild"
        venue="NeurIPS 2025 Datasets and Benchmarks (Under Review)"
        authors="Abigail Grassick, Jerome Tze-Hou Hsu, Max Whitton, Ethan Lin, Liam Gutierrez, Madelyn Hair, Haozheng Yu, Kristin Branson, Vivek Jayaraman, Michael A. Gil, Andrew M. Hein, Jennifer J. Sun"
        paperLink={null}
        codeLink={null}
      />

      <ResearchCard
        image={covidAggressionImage}
        title="Increased Online Aggression During COVID-19 Lockdowns: Two-Stage Study of Deep Text Mining and Difference-in-Differences Analysis"
        venue="Journal of Medical Internet Research, 2022"
        authors="Jerome Tze-Hou Hsu, Richard Tzong-Han Tsai"
        paperLink="https://www.jmir.org/2022/8/e38776"
        codeLink="https://github.com/JeromeTH/Increased-Online-Aggression-During-COVID-19-Lockdowns"
      />
    </div>
  )
}
