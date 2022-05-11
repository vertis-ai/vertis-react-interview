import { BaseQueryFn } from "@reduxjs/toolkit/query";

export const dummyBaseQuery =
    ({ baseUrl }: { baseUrl: string } = { baseUrl: "" }): BaseQueryFn<any, unknown, unknown> =>
        async () => {

                const employees = [
                    {
                        city: "Austin, TX",
                        zipCode: "10000",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Austin, TX",
                        zipCode: "10000",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Austin, TX",
                        zipCode: "10001",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Austin, TX",
                        zipCode: "10002",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Atlanta, GA",
                        zipCode: "10003",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Atlanta, GA",
                        zipCode: "10003",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Atlanta, GA",
                        zipCode: "10004",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Atlanta, GA",
                        zipCode: "10005",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Florence, AL",
                        zipCode: "10006",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Florence, AL",
                        zipCode: "10006",
                        tenure: Math.ceil(Math.random() * 10)
                    },
                    {
                        city: "Florence, AL",
                        zipCode: "10007",
                        tenure: Math.ceil(Math.random() * 10),

                    },
                ]

                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({ data: employees })
                    }, 1200)
                })
        };
