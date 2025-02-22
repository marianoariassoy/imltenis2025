"use client";

import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

export default function useFetchData<T>(url: string): FetchResult<T> {
  const publicURL = process.env.NEXT_PUBLIC_API_URL + url;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<T>(publicURL);
        setData(response.data);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [publicURL]);

  return { data, loading, error };
}
