import Header from "./components/Header";
import Entry from "./components/Entry";
import travelData from "./data.js";

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
  const elements = travelData.map((data) => {
    return (
      //   <Entry
      //     key={data.id}
      //     img={data.img.src}
      //     title={data.title}
      //     text={data.text}
      //   />

      <Entry key={data.id} {...data} />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{elements}</main>
    </>
  );
}
