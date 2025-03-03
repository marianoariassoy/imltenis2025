"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import toast, { Toaster } from "react-hot-toast";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Loader from "@/components/Loader2";
import Error from "./Error";

interface User {
  name: string;
  lastname: string;
  phone: string;
  location: string;
  email: string;
  dni: string;
  password: string;
  confirmPassword: string;
  birthday: string;
}

const Page = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    setSending(true);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", image!);

    try {
      const response = await axios.post(
        "https://api.imltenis.com.ar/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response?.data?.error) {
        setError(response.data.message);
        setSending(false);
      } else {
        setSended(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        setError(axiosError.response.data?.message || "Error desconocido");
      } else {
        setError("Error de conexión");
      }
      setSending(false);
    }
  };

  const password = watch("password", "");

  const getFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImage(file);
  };

  const errorMessage = "Este dato es obligatorio";

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-right",
        className: "text-sm",
        duration: 8000,
      });
    }
  }, [error]);

  if (sended)
    return (
      <Title
        title="¡Gracias!"
        emoji="🙏"
        description="¡Tu registro fue realizado con éxito!"
      />
    );

  return (
    <section>
      <div className="flex flex-col gap-y-6 max-w-md m-auto lg:max-w-none">
        <Title
          title="¡Bienvenido!"
          emoji="👋"
          description="Completá el formulario con tus datos y se parte de nuestra liga."
        />

        <div className="w-full m-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 gap-x-6">
              <div className="form-control">
                <Input
                  type="text"
                  title="Nombre"
                  placeholder="Rafael"
                  register={register("name", { required: errorMessage })}
                />
                <Error error={errors.name} />
              </div>
              <div className="form-control">
                <Input
                  type="text"
                  title="Apellido"
                  placeholder="Nadal"
                  register={register("lastname", {
                    required: errorMessage,
                    maxLength: 20,
                  })}
                />
                <Error error={errors.lastname} />
              </div>
              <div className="form-control">
                <Input
                  type="text"
                  title="Teléfono"
                  placeholder="11 1111-1111"
                  register={register("phone", { maxLength: 20 })}
                />
                <Error error={errors.phone} />
              </div>
              <div className="form-control">
                <Input
                  type="text"
                  title="Localidad"
                  placeholder="Manacor"
                  register={register("location")}
                />
              </div>
              <div className="form-control">
                <Input
                  type="email"
                  title="Email"
                  placeholder="hola@rafaelnadal.com"
                  register={register("email", {
                    required: errorMessage,
                    maxLength: 50,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Dirección de correo electrónico inválida",
                    },
                  })}
                />
                <Error error={errors.email} />
              </div>
              <div className="form-control">
                <Input
                  type="text"
                  title="DNI"
                  placeholder="12345678"
                  register={register("dni", {
                    required: errorMessage,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Solo se permiten números",
                    },
                    validate: (value) =>
                      value.length === 8 ||
                      "La longitud del DNI deben ser 8 números",
                  })}
                />
                <Error error={errors.dni} />
              </div>
              <div className="form-control">
                <Input
                  type="password"
                  title="Contraseña"
                  placeholder="contraseña"
                  register={register("password", {
                    required: errorMessage,
                    validate: (value) =>
                      value.length > 4 ||
                      "La longitud debe ser mayor a 4 caracteres",
                  })}
                />
                <Error error={errors.password} />
              </div>
              <div className="form-control">
                <Input
                  type="password"
                  title="Repetir contraseña"
                  placeholder="contraseña"
                  register={register("confirmPassword", {
                    required: errorMessage,
                    validate: (value) =>
                      value === password || "Las contraseñas no coinciden",
                  })}
                />
                <Error error={errors.confirmPassword} />
              </div>
              <div className="form-control">
                <label className="text-sm mb-2 block">
                  <span className="text-primary font-medium">
                    Fecha de nacimiento
                  </span>
                </label>
                <div className="flex gap-x-3">
                  <input
                    type="date"
                    defaultValue="1986-06-03"
                    id="date"
                    className="w-full h-12 border-primary border bg-transparent px-4 text-sm focus:outline-none focus:ring-0 placeholder:text-secondary rounded-lg mb-2"
                    {...register("birthday", { required: errorMessage })}
                  />
                </div>
                <Error error={errors.birthday} />
              </div>
              <div className="form-control">
                <label className="text-sm mb-2 block">
                  <span className="text-primary font-medium">
                    Foto de perfil (sugerido)
                  </span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  className="file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-3 file:h-12 file:text-sm file:font-semibold hover:file:bg-secondary file:cursor-pointer"
                  onChange={getFile}
                />
                {image && (
                  <div className="my-3">
                    <Image
                      src={URL.createObjectURL(image)}
                      alt="Vista previa de la foto"
                      className="w-24 h-24 rounded-full object-cover object-center"
                      width={96}
                      height={96}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="form-control mt-6 flex items-center justify-center">
              {sending ? <Loader /> : <Button>Registrate</Button>}
            </div>
            <div className="my-6">
              <p className="text-sm text-secondary text-center">
                En nuestro sitio web solo se mostrarán tu nombre, apellido y
                foto de perfil.
                <br />
                El resto de los datos se encuentran protegidos y nadie por fuera
                de la organiazación tiene acceso a ellos.
              </p>
            </div>
          </form>
        </div>
      </div>

      <Toaster />
    </section>
  );
};

export default Page;
