import Accordion from "../../../components/dashboard/Accordion";
import Select from "../../../components/dashboard/Select";
import Toggles from "../../../components/dashboard/Toggles";

export default function Home() {
    return (
      <>
        <Accordion
          sub="Generate Articles"
          items={[
            {
              title: "Select a template for writing",
              content:
                <>
                <Select
                  sub="Generation Mode"
                  title="Each option provides a different way to generate content."
                  items={[
                    {
                      title: "Keywords",
                      content: 
                      <>
                        <div className="my-2">
                          <b>
                            Keywords (1 per line)
                          </b>
                          <textarea
                            name="Keywords"
                            className="block w-full border p-3 my-1 focus:outline-min"
                            role="2"
                            placeholder="How to bake bread"
                          />
                          <p>We&apos;ll generate an article for each keyword.</p>
                        </div>
                      </>,
                    },
                    {
                      title: "Titles",
                      content: 
                      <>
                        <div className="my-2">
                          <b>
                            Titles (1 per line)
                          </b>
                          <textarea
                            name="Titles"
                            className="block w-full border p-3 my-1 focus:outline-min"
                            role="2"
                            placeholder="How to bake bread?"
                          />
                          <p>We&apos;ll generate an article for each Titles.</p>
                        </div>
                      </>,
                    },
                    {
                      title: "Description",
                      content: 
                      <>
                        <div className="my-2">
                          <b>
                          Context Description
                          </b>
                          <textarea
                            name="Titles"
                            className="block w-full border p-3 my-1 focus:outline-min"
                            role="2"
                            placeholder="SpaceX is a company that produces rockets."
                          />
                        </div>
                      </>,
                    },
                  ]}
                />
                <Toggles option="enable"  />
                </>,
            },
            {
              title: "Describe your topic",
              content:
                "Tell the artificial intelligence what your article should be about in a few words and it will start writing it for you.",
            },
          ]}
        />
      </>
  );
}