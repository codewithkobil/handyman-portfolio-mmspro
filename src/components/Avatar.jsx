import { useState } from "react";
import { User } from "lucide-react";

const Avatar = ({ src, alt }) => {
  const [error, setError] = useState(false);

  const showFallback = !src || error;

  return (
    <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center">
      {showFallback ? (
        <User className="h-8 w-8 text-slate-600" aria-hidden="true" />
      ) : (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

export default Avatar;
