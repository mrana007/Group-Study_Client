const Faq = () => {
  return (
    <div className="my-20 px-2">
      <h1 className="text-3xl font-extrabold text-center mb-2">
        Frequently Ask Questions
      </h1>
      <p className="text-center mb-10">
        Whether you are just starting your group study journey or seeking to
        enhance your collaborative learning experience, <br /> our Frequently
        Asked Questions (FAQs) are here to provide you with valuable insights
        and solutions. We have compiled <br /> a range of common queries and
        expert answers to help you navigate the world of group study
        effectively.
      </p>
      <div className="collapse collapse-arrow bg-base-200 text-center my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          What is group study, and why is it beneficial?
        </div>
        <div className="collapse-content">
          <p className="text-green-900 font-semibold">
            Group study involves a collaborative approach to learning, where a
            group of students come together to study and discuss academic
            topics. <br /> It is beneficial as it allows for shared insights,
            diverse perspectives, and mutual support, enhancing understanding
            and retention of material.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 text-center my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          What are the key advantages of group study?
        </div>
        <div className="collapse-content">
          <p className="text-green-900 font-semibold">
            Group study can lead to improved comprehension, motivation,
            accountability, and the opportunity to clarify doubts. <br /> It
            also promotes active learning, social interaction, and the sharing
            of different study techniques.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 text-center my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          How can I ensure a productive group study session?
        </div>
        <div className="collapse-content">
          <p className="text-green-900 font-semibold">
            Productive group study sessions require preparation. Share study
            materials in advance, stay focused on the agenda, <br /> encourage
            open communication, and provide constructive feedback to keep
            everyone engaged.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 text-center my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          How many people should be in a study group?
        </div>
        <div className="collapse-content">
          <p className="text-green-900 font-semibold">
            The ideal size of a study group varies but typically ranges from 3
            to 6 members. Smaller groups <br /> may lead to more focused
            discussions, while larger groups can offer diverse perspectives.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 text-center">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          What is the role of a group study leader or coordinator?
        </div>
        <div className="collapse-content">
          <p className="text-green-900 font-semibold">
            A study leader is responsible for organizing study sessions, setting
            goals, keeping members on track, <br /> and ensuring that everyone
            contributes. They help maintain structure and focus during group
            study.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
