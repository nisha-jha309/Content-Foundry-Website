const Testimonial = ({ text, name, role }) => {
  return (
    <article className="flex border-t border-[#675f58] px-0 pb-[5px] pt-[27px] md:flex-col">
      <div>
        <p className="mb-6 font-serif text-base md:text-md leading-[1.4] text-[#f4f0e9]">
          {text}
        </p>

        <small className="mt-auto block text-xs leading-[1.5] text-[#cfc5b9]">
          <strong className="text-white">{name}</strong>
          <br />
          {role}
        </small>
      </div>
    </article>
  );
};
export default Testimonial;