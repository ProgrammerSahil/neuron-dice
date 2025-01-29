import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchArticles } from '@/lib/wikipedia'
import { AxiosResponse } from 'axios'

interface ArticlesState {
  data?: any;
  error?: string;
}

const Preferences = () => {
  const [articles, setArticles] = useState<ArticlesState>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
      try {
        const result = await fetchArticles(["tech", "politics"]);
        if (result instanceof Error) {
          setArticles({ error: result.message });
        } else {
          setArticles({ data: result.data });
        }
      } catch (error) {
        setArticles({ error: 'Failed to fetch articles' });
      } finally {
        setIsLoading(false);
      }
    };

    getArticles();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (articles.error) {
    return (
      <View>
        <Text>Error: {articles.error}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{articles.data.query.search[0].title}</Text>
      <Text>{articles.data.query.search[1].title}</Text>
      <Text>{articles.data.query.search[2].title}</Text>
      <Text>{articles.data.query.search[3].title}</Text>
      <Text>{articles.data.query.search[4].title}</Text>
    </View>
  );
}

export default Preferences