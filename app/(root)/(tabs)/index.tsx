import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { fetchArticles } from "@/lib/wikipedia";

interface WikiArticle {
  pageid: number;
  title: string;
  snippet: string;
}

interface WikiResponse {
  query: {
    search: WikiArticle[];
  };
}

interface ArticlesState {
  data?: WikiResponse;
  error?: string;
}

export default function Index() {
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
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-xl">Loading...</Text>
      </View>
    );
  }

  if (articles.error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-xl">Error: {articles.error}</Text>
      </View>
    );
  }

  const dataToRender = articles.data?.query?.search ?? [];

  return (
    <ImageBackground
      source={require("../../../assets/images/background.jpg")}
      className="flex-1"
      resizeMode="cover"
      blurRadius={4}
    >
      {/* Dark overlay */}
      <View className="absolute inset-0 bg-black/70" />
      
      <View className="flex-1 pt-12">
        {/* Header */}
        <View className="px-6 mb-6">
          <Text className="text-white text-3xl font-bold">
            Tech & Politics
          </Text>
          <Text className="text-white/70 text-lg mt-2">
            Latest articles from Wikipedia
          </Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          className="flex-1"
          contentContainerClassName="px-6 pb-12"
          showsVerticalScrollIndicator={false}
        >
          {dataToRender.length === 0 ? (
            <Text className="text-white text-center text-xl">No articles found</Text>
          ) : (
            dataToRender.map((article: WikiArticle) => (
              <View 
                key={article.pageid} 
                className="mb-8 bg-black/30 rounded-xl p-6 border border-white/10"
              >
                <Text className="text-white text-xl font-bold mb-2">
                  {article.title}
                </Text>
                <Text 
                  className="text-white/60 text-base"
                  numberOfLines={2}
                >
                  {article.snippet.replace(/<\/?[^>]+(>|$)/g, "")}
                </Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}